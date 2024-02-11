public class Demo {
    public static void main(String[] args) {
        int nums[] = {4,6,11,24,25,33,67,96};
        int target = 7;

        int result1 = BinarySearch(nums, target);
        int result2 = RecurBinarySearch(nums, target,0, nums.length-1);
        if(result2 != -1){
            System.out.println("Answer is :"+ result2);
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
    public static int RecurBinarySearch(int num[], int target, int start, int end){
        if (start <= end){
            int mid = (start + end)/2;
            if(num[mid]==target){
                return mid;
            }
            else if(num[mid]> target){
                return RecurBinarySearch(num, target, start, end = mid - 1);
            } else
                return RecurBinarySearch(num, target, start = mid + 1, end);
        }
        return -1;
    }
}
