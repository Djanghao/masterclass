# O(n) HashSet Solution | Human Readable | Detailed Explanation

**Author:** PrinceArthas
**Votes:** 1
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/4847755/](https://leetcode.com/problems/fair-candy-swap/solutions/4847755/)

---

# Intuition
1. My first thought is always to solve a problem in the easiest way. 
2. In most cases this is a double loop solution that runs in n^2 time. However, almost always the solution can be improved dramatically.
3. So my next thought was how can I do it in n time.
4. That's when I remembered that HashSets have a lookup time of O(1). Which means you don't have to look through the entire group of elements to find your result.
5. Even better is that you don't have to have to do any repeated checks since all repeated values are removed in the construction of a HashSet.
5. After that it's a simple loop of one of the HashSet's and looking up a specific value in the other.

# Approach
1. Get the sums of both of the arrays seperately.
2. Find the difference of these sums.
3. Convert both arrays to HashSets for the reasons mentioned in Intuition.
4. Create variables for returning in the solution array.
5. Loop through one of the arrays. Alice's in this solution. You could probably do some optimization here and select the HashSet with the least amount of elements. But it's likely that it would require duplicate code or +n space.
6. In the loop check if the other HashSet contains the value we are looking for. Keep reading for how to get the value.
7. We know that if we move 3 from one side (-3) and add three to the other side (+3), the array on first side loses 3 and the side on the second gains three. This is a net difference of 6.
8. This is important because we are interested in finding/maintaining the balance of both Alice's and Bob's candy. We know that if they started with an equal amount each, if Alice gave Bob 3 candies, then Bob would have to give Alice 3 candies back to maintain the balance.
9. However, if the balance is off from the start, they are not giving and receiving the same amount of candy, but giving and receiving amounts so that the net results in both of them having the same amount of candy.
10. We first start with Alice's candy box. We know that in order to achieve balance, (Alice's candy box - Bob's candy box) == candyDifference.
11. If Alice has less amount of candy than Bob, the difference is negative and when it is subtracted, it turns into a positive resulting in a bigger number. Therefore we are looking for a larger number in Bob's boxes of candy. 
12. It's the same when Alice has more candy except that the number we look for is a smaller number than Alice's candy box because the number we search for will be Alices candy box - something positive. 
13. The reason we do candyDifference / 2 is because whatever swap we make, the change will be x2. We know this because of #7.
14. If we find such a box in Bob's collection of candy boxes that pairs with the current Alice candy box, we break.
15. After breaking we return the current Alice candy box and the Bob box that satisfied the condition in a new array since the result asks for an array.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n + m)

Note: You can use bring this down to O(1) space complexity by not converting to HashSets and just using the arrays, but it is signifcantly slower and takes more space.

# Code
```
public class Solution 
{
    public int[] FairCandySwap(int[] aliceSizes, int[] bobSizes) 
    {
        int aliceSum = aliceSizes.Sum();
        int bobSum = bobSizes.Sum();
        int candyDifference = aliceSum - bobSum;

        HashSet<int> aliceCandyBoxes = new HashSet<int>(aliceSizes);
        HashSet<int> bobCandyBoxes = new HashSet<int>(bobSizes);

        int aliceCandyBoxToSwap = default(int);
        int bobCandyBoxToSwap = default(int);

        foreach(int aliceCandyBox in aliceCandyBoxes)
        {
            int idealBobBox = aliceCandyBox - (candyDifference / 2);
            if(bobCandyBoxes.Contains(idealBobBox))
            {
                aliceCandyBoxToSwap = aliceCandyBox;
                bobCandyBoxToSwap = idealBobBox;
                break;
            }
        }

        return new int[] { aliceCandyBoxToSwap, bobCandyBoxToSwap }; 
    }
}
```