public class Demo {
    public static void main(String[] args) {
        int nums[] = {4,6,11,24,25,33,67,96};
        int target = 4;

        int result = BinarySearch(nums, target);
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

    public static int BinarySearch(int num[], int target){
        int start = 0;
        int end = num.length-1;

        while (start <= end){
            int mid = (start + end)/2;
            if(num[mid]==target){
                return mid;
            }
            else if(num[mid]> target){
                end = mid - 1;
            } else
                start = mid + 1;
        }
        return -1;
    }
}
