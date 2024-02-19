#!/bin/bash

# Extract the energies and scf steps from the output file
echo "Extracting data from N2H4_qe_output.txt..."
echo "-------------------------------------------"

grep -n "number of scf cycles" N2H4_qe_output.txt | cut -d':' -f2 > tmp_steps.txt
grep "!" N2H4_qe_output.txt | cut -d'!' -f2 > tmp_energies.txt

# Count the number of lines in each temporary file
num_steps=$(wc -l < tmp_steps.txt)
num_energies=$(wc -l < tmp_energies.txt)

# Check if step count matches the energy count
if [ $num_steps -ne $num_energies ]; then
    echo "Mismatch in step count and energy count. Adding missing step..."
    # Find missing step
    missing_step=$(comm -23 <(sort tmp_steps.txt) <(sort tmp_energies.txt))
    echo "$missing_step" >> tmp_steps.txt
fi

# Combine steps and energies into ener_data.dat
paste tmp_steps.txt tmp_energies.txt > ener_data.dat

# Add column labels to ener_data.dat (This sed is modified for mac)
sed -i '' -e '1i\'$'\n''#steps'$'\t''#energy' ener_data.dat

#for linux: sed -i '1i #steps\t#energy' ener_data.dat

# Clean up temporary files
rm tmp_steps.txt tmp_energies.txt

echo "Extraction completed. Data saved in ener_data.dat"
echo "-------------------------------------------------"
