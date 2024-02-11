public class Demo2 {
    public static void main(String[] args) {
        //int nums[] = {4,6,11,24,25,33,67,96};
        int nums[] = {1,5,2,78,12,11,67};
        int result[] = BubbleSort(nums);
        System.out.println("Before sorting");
        for(int num : nums){
            System.out.print(num +" ");
        }
        System.out.println();
        System.out.println("After sorting");
        for(int num : result){
            System.out.print(num +" ");
        }
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
