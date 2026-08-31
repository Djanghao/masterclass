# Solution with sorting and changing the edges of the array.

**Author:** I1FAZEfFom
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/5325931/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/5325931/)

---

# Intuition
<!-- 
Even thought the math in this question looks complex, there are some things to note:
1. low compelxity doesnt matter, since you can always change numbers to the a same number in the array (or just both of them to the same number), resulting it to be 0.
2. that being said, minimizing the high Score became the task.
3. to minimize the high score, well need to change 2 out of the 4 edges (maximum, minimum, second maximum, second minimum)
-->

# Approach
<!--
note: if the array is in the length of 3, the result is always 0, and since my code fails in that specific case, i just added to return 0.
1. sorting the array
2. using conditions to determine which 2 of the edges to change.
note: once an edge changes, the code doesnt concider it an edge anymore, viewing the next one as the edge.

3. the 2 changed elements are changed to the same number, which is the average of the new edges of the array, to minimize hight score, and setting low score to 0 (they become the same number).

4. once changing them resorting the array to get the score.
 
-->

# Complexity
- Time complexity:
<!-- since im using quickSort, the worst complexity is O(n^2)
     althought average complexity is O(n*log(n))
 -->

- Space complexity:
<!-- since im using insersionkSort, the worst complexity is O(n^2)
     but since we are using is to sort an almost sorted array,  i   would say its more like O(n) -->

# Code
```
public class Solution {
    public int MinimizeSum(int[] nums) {
        if(nums.Length == 3)
            return 0;
        int[] arr = QuickSortArray(nums,0,nums.Length-1);

        int min = arr[0];
        int min2 = arr[1];
        int max = arr[arr.Length -1];
        int max2 = arr[arr.Length -2];

        int min3 = arr[2];
        int max3 = arr[arr.Length-3];

        int maxAbsVal = Math.Abs(max3-min3);
        bool isMax = false;

        //if(Math.Abs(max - max3) > Math.Abs(min - min3)){
            //isMax = true;
        //}

        if(Math.Abs(max - min3) > Math.Abs(min - max3)){
            isMax = true;
        }
        if(isMax){ //max is changing
            if(Math.Abs(min - max3) > Math.Abs(max2 - min2)){
            //min and max are changing
            min = (max2+min2)/2;
            max = min;
        }
        else{
            //max and max2 are changing
            max2 = (min+max3)/2;
            max = min;
        
        }
        }
        else{//min is changing
            if(Math.Abs(max - min3) > Math.Abs(min2 - max2)){
            //min and max are changing
            min = (max2+min2)/2;
            max = min;
        }
        else{
            //min and min2 are changing
            min = (max+min3)/2;
            min2 = min;
        }


        }

        arr[0] = min;
        arr[1] = min2;
        arr[arr.Length -1] =  max;
        arr[arr.Length -2] = max2;
        InsersionSort(arr);

        return (Math.Abs(arr[arr.Length-1]- arr[0]));
    }

    void InsersionSort(int[] arr)
    {
        int n = arr.Length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;

            // Move elements of arr[0..i-1],
            // that are greater than key,
            // to one position ahead of
            // their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
    public int[] QuickSortArray(int[] array, int leftIndex, int rightIndex)
{
    var i = leftIndex;
    var j = rightIndex;
    var pivot = array[leftIndex];

    while (i <= j)
    {
        while (array[i] < pivot)
        {
            i++;
        }
        
        while (array[j] > pivot)
        {
            j--;
        }

        if (i <= j)
        {
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }
    
    if (leftIndex < j)
        QuickSortArray(array, leftIndex, j);

    if (i < rightIndex)
        QuickSortArray(array, i, rightIndex);

    return array;
}
}
```