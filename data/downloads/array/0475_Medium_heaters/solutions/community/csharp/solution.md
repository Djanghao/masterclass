# Verbose C# Implementation with Heuristic Based Binary Search

**Author:** akshar24
**Votes:** 0
**Link:** [https://leetcode.com/problems/heaters/solutions/5666974/](https://leetcode.com/problems/heaters/solutions/5666974/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Where given the distances between each house and its nearest heater, the minimum heater radius required is equal to the largest of these distance.

# Approach
<!-- Describe your approach to solving the problem. -->
A brute force approach may iterate over the houses and for each calculate its closest heater. If nothing else is done, in the worst case, this will take $O(Count(heaters))$ for every house, giving $O(Count(houses) * Count(heaters))$.

If both lists are sorted, however, each subsequent house iteration can exclude all heaters that were determined to be nearer position zero than the closest heater of the previous iteration. By caching and repeatedly updating a starting heater index, we can reduce the number of heaters for each subsequent iteration of B. Assuming the lists are sorted optimally ($O(n*log(n))$), we get $O(Count(houses)*log(Count(houses)))$ to sort the houses, $O(Count(heaters)*log(Count(heaters)))$ to sort the heaters, $O(Count(houses))$ to iterate through the sorted house list, and $O(Count(heaters))$ to iterate through the heaters, as each heater only need be analyzed a constant number of times to find each that is closest every house. This reduces to $O(Count(houses)*log(Count(houses)) + Count(heaters)*log(Count(heaters)))$, which is better than $O(Count(houses) * Count(heaters))$ for large input sizes (> ~16 houses or heaters).

It's notable that this operation can be done agnostically with respect to either list. The goal is to find the largest distance between each house and its closest heater. Whether the heaters are iterated and the houses are searched or vice versa does not affect correctness, so long as the lists are separate. The complexity is bound also by the complexity of the operations unique to each list's iteration. The smaller of the two lists should be chosen for the more expensive calculations. This is likely represented in my solution by the "GetNearestHeater" implementation. A better solution may replace "house" and "heater" terminology with an agnostic abstraction like "a" and "b" and provide to that function whichever list is shorter in rather than only ever the heater list.

This problem is tagged with "binary search". This seems to be me to address the solution of finding the nearest heater to a house (or vice versa). This tag seems to me somewhat misleading. While a binary search may allow us to skip over a number of heaters (b) that are all nearer position zero than the current house (a), but if the furthest heater from the start is always used as the right bound, it also may cause redundant comparisons if the closest heater of the current house is relatively few heaters away from the previous iteration's closest heater. This may seem to improve the $O(Count(heaters) + Count(houses)) part of the algorithm to $O(log(Count(heaters)) + Count(houses)), but I don't think this is correct, because since the right bound is always chosen, the worst case may do a redundant binary search for each heater. This may work out to $O(Count(heaters)*log(Count(heaters)) + ...)$, but I am not certain.

Indeed it seems to me that only in certain and perhaps rare cases may binary search improve the performance. A case where improvement via binary search is more likely is may be where the number of heaters (b) remaining in the algorithm is much larger than the total number of houses (a). As such I have implemented a heuristic which uses binary search to locate the nearest heater only if the number of remaining heaters exceeds twice the total number of houses. This seems to make the algorithm perform better, but if the test cases change the performance may as well.

Furthermore, the heuristic approach may still perform poorly depending on the distribution of heaters among houses. A better heuristic may account for such distributions and may implement complex refinements to binary search, such as an exponential backoff of an upper bound. In the spirit of algorithmic practice, I feel compelled to note if more heaters are added in the future to preanalyzed datasets a dynamic programming algorithm that operates on precached qualities will perform better here.

I'm interested to hear more about which statistical metrics make the binary search algorithm quicker, as well as I am excited to hear any corrections on statements I've so far made.

# Complexity
**Time complexity:**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(Count(houses)\u2217log(Count(houses))+Count(heaters)\u2217log(Count(heaters)))$

**Space complexity:**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
This assumes optimal garbage collection and that the arrays do not account for additional space complexity, as they are sorted in place. Only a constant number of registers need be allocated, bound by the size of an integer in memory.

# Code
```csharp []
// This helper method is because I'm slow and get confused when I see math instead of an indication of the final index.
public static class ArrayHelpers
{
    public static int LastIndex(this int[] array) => array.Count() - 1;
}

class Solution
{
    public int FindRadius(int[] houses, int[] heaters) {
        Array.Sort(houses);
        Array.Sort(heaters);
        var heaterBound = 0;
        var largestMinDistance = 0;
        foreach (var house in houses)
        {
            // This represents a branch in control flow based on a heuristic. The intuition of the heuristic is this:
            // If the remaining heaters are much greater than the remaining houses then binary search may be quicker
            // at finding the nearest heater. But if there are roughly the same number of houses as heaters, a two-pointer
            // solution will not be overly costly.
            // A better heuristic would calculate some aggregate statistical metrics of the data. If the houses
            // are well distributed among the heaters, then binary search may be slower, since it accounts for the furthest heater
            // from the start, where if checked linearly only the first few heaters beginning at the index need be checked.
            // Any given house in sorted order will be nearby its relative heater, identified by the heaterBound.
            // If the houses are poorly distributed relative to the heaters, then binary search may be better at locating the correct heater.
            // E.g. the heaters are nuclear heaters and are very far from the houses and installed in locations where environmental
            // factors are more important to take into account, but where a large radius is trivial.
            int distance;
            if ((heaters.LastIndex() - heaterBound) > (2 * houses.Length))
            {
                (heaterBound, distance) = GetClosestHeaterViaBinarySearch(house, heaterBound, heaters);
            }
            else
            {
                (heaterBound, distance) = GetClosestHeater(house, heaterBound, heaters);
            }

            // If there is only one more heater to check then we can optimize. If it is nearer to the start than the current house,
            // then it must be farther from the last house than it is from the current house, and we know that its distance from the
            // last house is the furthest possible distance remaining. If it is located between the two houses, then the maximum of their
            // distances to the heater is the largest possible distance remaining. In either case, none of the houses besides the current
            // house and the furthest house from the start are important, and we can terminate the loop early.
            if (heaterBound == heaters.LastIndex())
            {
                var furthestHouse = houses.Last();
                var heater = heaters[heaterBound];
                var distanceFromLastHouse = GetDistance(furthestHouse, heater);
                var largestMinDistanceRemaining = house < heater ? Math.Max(distance, distanceFromLastHouse) : distanceFromLastHouse;
                if (largestMinDistanceRemaining > largestMinDistance)
                {
                    largestMinDistance = largestMinDistanceRemaining;
                }
                break;
            }

            // We have the minimum distance between an element in the house list for the current element.
            // We're looking for the largest minimum distance, so if the minimum distance here exceeds the largest
            // distance thus far found, then we need to update it.
            if (distance > largestMinDistance)
            {
                largestMinDistance = distance;
            }
        }
        return largestMinDistance;
    }

    // Assumes heaters are sorted and the heater at heaterBound is the closest heater to the house that precedes the provided
    // house in sorted order. Searches linearly through the heaters to locate the closest one to the house, then returns its
    // index and the distance between the provided house and the heater.
    private static (int heaterIndex, int distance) GetClosestHeater(int house, int heaterBound, int[] heaters)
    {
        if (heaters.LastIndex() == heaterBound)
        {
            return (heaterBound, GetDistance(house, heaters[heaterBound]));
        }

        // Look ahead to find the two closest heaters on either side of the house, which after this loop terminates
        // will correspond to heaters[heaterBound] and heaters[heaterBound + 1] respectively.
        while (heaterBound < heaters.LastIndex() && heaters[heaterBound + 1] < house)
        {
            heaterBound++;
        }

        var leftDistance = GetDistance(heaters[heaterBound], house);
        if (heaterBound == heaters.LastIndex())
        {
            return (heaterBound, leftDistance);
        }
        var rightDistance = GetDistance(heaters[heaterBound + 1], house);
        return leftDistance < rightDistance ? (heaterBound, leftDistance) : (heaterBound + 1, rightDistance);
    }

    // Assumes heaters are sorted and the heater at heaterBound is the closest heater to the house that precedes the provided
    // house in sorted order. Binary searches through the sorted heaters to locate the closest one to the house, then returns its
    // index and the distance between the provided house and the heater. Choses for its starting left bound the heaterBound arg and
    // for its right bound the furthest heater from the start according to the heaters list (the last heater).
    private static (int heaterIndex, int distance) GetClosestHeaterViaBinarySearch(int house, int heaterBound, int[] heaters)
    {
        // If there is only one heater remaining then there is only one heater to which it can be closest
        if (heaters.LastIndex() == heaterBound)
        {
            return (heaterBound, GetDistance(house, heaters[heaterBound]));
        }

        var leftBound = heaterBound;
        var rightBound = heaters.LastIndex();

        // If the house is not bound by the minimum analyzed heater and the maximum analyzed heater
        // then it is closest to it's nearer bound, which can be found by equality comparison.
        if (house <= heaters[leftBound])
        {
            return (leftBound, GetDistance(house, heaters[leftBound]));
        }
        else if (house >= heaters[rightBound])
        {
            return (rightBound, GetDistance(house, heaters[rightBound]));
        }

        while (leftBound < rightBound - 1)
        {
            var middle = leftBound + (int)Math.Round((decimal)((rightBound - leftBound) / 2));
            // If the house is at a bound, then the distance is zero and cannot be reduced, so we can return
            if (house == heaters[middle])
            {
                return (middle, 0);
            }
            else if (house < heaters[middle])
            {
                rightBound = middle;
            }
            else
            {
                leftBound = middle;
            }
        }
        // Here we expect the bounds to be one index apart
        var leftDistance = GetDistance(heaters[leftBound], house);
        var rightDistance = GetDistance(heaters[rightBound], house);
        return leftDistance < rightDistance ? (leftBound, leftDistance) : (rightBound, rightDistance);
    }

    public static int GetDistance(int a, int b) => Math.Abs(a - b);
}
```