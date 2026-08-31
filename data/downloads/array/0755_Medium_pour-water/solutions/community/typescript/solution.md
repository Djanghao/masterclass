# Typescript | JavaScript | Detailed Explanation

**Author:** anaken
**Votes:** 1
**Link:** [https://leetcode.com/problems/pour-water/solutions/2925250/](https://leetcode.com/problems/pour-water/solutions/2925250/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Looking at the problem it looked like an array problem.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach here is to simulate the problem scenario. 
We iterate over the volume one unit at a time, starting with looking left and searching for an eventual place to fall, if we dont find a height diff to the left, we start to go to the right using the similar approach until the very edge. Once we find a height difference we still search either direction to make sure there is not further height diff otherwise the water has to go to that index.

**If you liked my solution and explanation please upvote this post. Thanks.**

# Complexity
- Time complexity: O(volume * N) where N is the heights length
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) for the result array
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function pourWater(heights: number[], volume: number, k: number): number[] 
{
  // as we are trying to manipulate the heights array I prefer to use a separate result array.
  let result : number[] = heights;
  let currentVolume : number = volume;

  //Immediate left of the starting index, this will remain constant
  let immediateLeft : number = k-1;
  // Immediate right of the starting index, this too will remain constant
  let immediateRight : number = k+1;

  while(currentVolume > 0)
  {
      // checking for eventual fall left
      let finalRestingIndex = k;

      let currentLeft = immediateLeft;
      //  We will continue to move left until we encounter the left most edge and as long as we moving at the same level of a level below.
      while(currentLeft >= 0 && result[currentLeft] <= result[finalRestingIndex])
      {
         if(result[currentLeft] < result[finalRestingIndex])
         {
            finalRestingIndex = currentLeft;
         }             
         currentLeft--;
      }
     
      // Checking for eventual fall right
      We will continue to move right as long as we dont encounter the right most edge and as long as we are moving at the same level or a level below. 
      if(finalRestingIndex === k)
      {
          let currentRight = immediateRight;
          while(currentRight < heights.length && result[currentRight] <= result[finalRestingIndex])
          {
            if(result[currentRight] < result[finalRestingIndex])
            {
              finalRestingIndex = currentRight;
            }         
          currentRight++;       
          }
      }
      Increasing the height of the final index captured.     
      result[finalRestingIndex]++;

      Decreasing the volume as it has been processed by increasing the height of the chosen index.
      currentVolume--;
  }

  return result;
};
```