public class Demo2 {
    public static void main(String[] args) {
        //int nums[] = {4,6,11,24,25,33,67,96};
        int nums[] = {1,5,2,78,12,11,67,3};
        //int result[] = BubbleSort(nums); Putting it here will affect the original array
        System.out.println("Before sorting");
        for(int num1 : nums){
            System.out.print(num1 +" ");
        }
        int result[] = SelectionSort(nums); //Put it here, so the original array is only modified at this point
        System.out.println();
        System.out.println("After sorting");
        for(int num2 : result){
            System.out.print(num2 +" ");
        }
    }
    public static int[] SelectionSort(int num[]){
        int temp = 0;
        for(int i = num.length-1; i>=0; i--){
            int maxIndex = 0; //select!!
            for(int j = 1; j<= i; j++){
                if(num[j]>num[maxIndex]){ //select!!
                    maxIndex = j;
                }
            }
            temp = num[i];
            num[i] = num[maxIndex];
            num[maxIndex] = temp;
        }
        return num;
    }
    public static int[] BubbleSort(int num[]){
        int temp = 0;
        int size = num.length;
        for(int i=0; i<size; i++){
            for(int j=0; j<size-1; j++){
                if(num[j]>num[j+1]){
                    temp = num[j];
                    num[j] = num[j+1];
                    num[j+1] = temp;
                }
            }
        }
        return num;
    }
}
