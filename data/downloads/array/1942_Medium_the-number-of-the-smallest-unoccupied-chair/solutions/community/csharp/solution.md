# C# Solution for The Number of the Smallest Unoccupied Chair Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897616/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897616/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about assigning the smallest available chair to each friend when they arrive at a party, and freeing the chair when they leave. The goal is to find which chair the targetFriend will sit on. The intuition behind this solution is to directly simulate the process by maintaining a list of chairs, keeping track of when chairs become occupied or free, and assigning the smallest unoccupied chair when needed.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Sorting the friends by arrival times:
	\u2022	We sort the friends based on their arrival times so we can process their seating in the correct order.
2.	Occupied Array:
	\u2022	We use a boolean array occupied[] where each index represents a chair, and its value (true or false) represents whether the chair is occupied. This helps us efficiently find the smallest available chair.
3.	Manual Chair Assignment:
	\u2022	For each arriving friend, we scan through the occupied[] array to find the smallest unoccupied chair and assign it to the friend.
4.	Freeing the Chairs:
	\u2022	We manually manage when chairs become available by using a list of leavingList that stores the friends\u2019 leaving times and the chair they were sitting on. When a friend\u2019s departure time passes, we mark their chair as unoccupied so it can be reassigned.
5.	Target Friend Detection:
	\u2022	When we assign a chair to the targetFriend, we return the chair number immediately.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1.	Sorting the friends:
	\u2022	Sorting the times array based on arrival times takes O(n \\log n), where n is the number of friends.
2.	Freeing and Assigning Chairs:
	\u2022	For each friend that arrives, we might need to iterate through the leavingList to free chairs and then through the occupied[] array to assign the smallest available chair.
	\u2022	Freeing chairs takes at most O(n) in the worst case, and finding the smallest available chair also takes O(n).
As we perform this operation for each of the n friends, the overall time complexity is O(n^2) due to the nested iterations.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1.	Sorting and Arrays:
	\u2022	We use the occupied[] array of size n to track which chairs are occupied. Additionally, we maintain a chairAssignment[] array of size n to record which chair each friend occupies.
2.	Leaving List:
	\u2022	The leavingList stores the leaving times and assigned chairs of friends, which can also grow to size O(n).

Thus, the overall space complexity is O(n).

# Code
```csharp []
public class Solution {
    public int SmallestChair(int[][] times, int targetFriend) {
        int n = times.Length;

        int[][] timesWithIndex = new int[n][];
        for (int i = 0; i < n; i++) {
            timesWithIndex[i] = new int[] { times[i][0], times[i][1], i };
        }

        Array.Sort(timesWithIndex, (a, b) => a[0].CompareTo(b[0]));

        bool[] occupied = new bool[n];
        int[] chairAssignment = new int[n]; 
        var leavingList = new List<Tuple<int, int>>();  
        
        for (int i = 0; i < n; i++) {
            int arrivalTime = timesWithIndex[i][0];
            int leavingTime = timesWithIndex[i][1];
            int friendIndex = timesWithIndex[i][2];
            leavingList.RemoveAll(l => {
                if (l.Item1 <= arrivalTime) {
                    occupied[l.Item2] = false;  
                    return true;
                }
                return false;
            });
            int assignedChair = -1;
            for (int j = 0; j < n; j++) {
                if (!occupied[j]) {
                    assignedChair = j;
                    occupied[j] = true;  
                    break;
                }
            }
            chairAssignment[friendIndex] = assignedChair;
            if (friendIndex == targetFriend) {
                return assignedChair;
            }
            leavingList.Add(Tuple.Create(leavingTime, assignedChair));
        }
        return -1;
    }
}
```