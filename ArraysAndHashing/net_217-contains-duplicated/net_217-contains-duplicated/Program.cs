/*
 * 217 Contains Duplicated
 * Given an integer array nums[], return true IF ANY VALUE APPEARS AT LEAST TWICE in the array,
 * and return false if every element is distinct.
 */

using System.Text;

var arr = new[] { 1,2,3,1 };
Console.WriteLine($"nums {StringArr(arr)} should be true= {ContainsDuplicated(arr)}");

arr = new[] { 1,2,3,4 };
Console.WriteLine($"nums {StringArr(arr)} should be false= {ContainsDuplicated(arr)}");

arr = new[] { 1,1,1,3,3,4,3,2,4,2 };
Console.WriteLine($"nums {StringArr(arr)} should be true= {ContainsDuplicated(arr)}");
return;


string StringArr(int[] nums)
{
    var result = new StringBuilder();
    result.Append('[');
    foreach (var item in nums) result.Append($" {item} ");
    result.Append(']');
    return result.ToString();
}

bool ContainsDuplicated(int[] nums)
{
    return new HashSet<int>(nums).Count != nums.Length;
}