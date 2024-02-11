public class Demo2 {
    public static void main(String[] args) {
        int nums[] = {4,6,11,24,25,33,67,96};
        int target = 7;
        int result = BubbleSort(nums, target);
        if(result != -1){
            System.out.println("Answer is :"+ result);
        } else {
            System.out.println("Not found");
        }
    }

    public static int BubbleSort(int num[], int target){
        return -1;
    }
}
