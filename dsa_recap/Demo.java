public class Demo {
    public static void main(String[] args) {
        int nums[] = {4,6,11,24,25};
        int target = 11;

        int result = LinearSearch(nums, target);
        if(result != -1){
            System.out.println("Answer is :"+ result);
        } else {
            System.out.println("Not found");
        }
    }
    public static int LinearSearch(int num[], int target){
        for (int i = 0; i<num.length; i++ ){
            if (num[i] == target){
                return i;
            }
        }
        return -1;
    }
}
