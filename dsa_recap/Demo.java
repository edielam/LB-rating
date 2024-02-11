public class Demo {
    public static void main(String[] args) {
        int nums[] = {4,6,11,24,25};
        int target = 11;

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
        int mid = (start + end)/2;

        while (start < end){
            if(num[mid]==target){
                return mid;
            }
            else if(num[mid]> target){
                start = mid;
            } else{
                end = mid;
            }
        }
        return -1;
    }
}
