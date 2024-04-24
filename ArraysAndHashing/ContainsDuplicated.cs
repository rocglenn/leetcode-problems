namespace ConatinsDuplicated;

/*
    * 217. Contains duplicated
    * Given an array nums, return true if any value appears at least twice in the array,
    * and return false if every element is distinct
    */
public class ContainsDuplicated
{
    public static void Main(string[] args) {}
    
    //Space: O(n), time: O(n)
    public bool Solution(int[] nums)
    {
        /*
        var set = new HashSet<int>();
        foreach (var num in nums)
        {
            if (!set.Add(num)) return true;
        }
        return false;
        */
        //one liner
        return new HashSet<int>(nums).Count != nums.Length;
    }
}