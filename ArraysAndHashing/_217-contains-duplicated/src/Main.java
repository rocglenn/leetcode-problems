import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;

/**
 * 217 Contains duplicated
 * Given an integer array nums[], return true IF ANY VALUE APPEARS AT LEAST TWICE in the array,
 * and return false if every element is distinct.
 */

public class Main {
    public static void main(String[] args) {
        int[] nums = new int []{ 1,2,3,1 };
        System.out.println("Array: " + Arrays.toString(nums) + " should be true= " + containsDuplicated(nums));

        nums = new int[] { 1,2,3,4 };
        System.out.println("Array: " + Arrays.toString(nums) + " should be false= " + containsDuplicated(nums));

        nums = new int[] { 1,1,1,3,3,4,3,2,4,2 };
        System.out.println("Array: " + Arrays.toString(nums) + " should be true= " + containsDuplicated(nums));
    }

    private static boolean containsDuplicated(int[] nums) {
        if (nums.length == 0) return false;

        HashSet<Integer> set = new HashSet<>();
        for (var item: nums) {
            if (set.contains(item)) return true;
            set.add(item);
        }
        return false;
    }
}