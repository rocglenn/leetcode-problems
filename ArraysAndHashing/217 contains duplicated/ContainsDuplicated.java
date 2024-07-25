import org.junit.jupiter.api.Assertions;
import java.util.HashSet;
import static org.junit.jupiter.api.Assertions.*;

/*
* 217. Contains duplicated.
* https://leetcode.com/problems/contains-duplicate/
* Given an integer array nums, return true if any value appears at least twice in the array, or false if
* every element is distinct.
* */
public class ContainsDuplicated {
    public static void main(String[] args){}
    /**
     * space: O(n), at worst size of the set it will be same size as input array.
     * time: 0(n), at worst we need to iterate over all the input array.
     */
    public boolean solution(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num: nums) {
            //set.add() returns true if the element was added successfully
            //so if add() returns false it means num already exists
            if (!set.add(num)) return true;
        }
        return false;
    }
}
