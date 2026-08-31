# Java || With good explaination

**Author:** nobody10
**Votes:** 6
**Link:** [https://leetcode.com/problems/online-election/solutions/3246744/](https://leetcode.com/problems/online-election/solutions/3246744/)

---


# Approach
The TopVotedCandidate class represents the online election system. The constructor takes two arrays as input: persons, which is an array of integers representing the ID of each person who voted, and times, which is an array of integers representing the time at which each vote was cast. The constructor initializes two arrays: times, which stores the input times array, and leads, which stores the ID of the current leader at each time in the times array.

The q method takes a time t as input and returns the ID of the leader at that time. This method uses binary search to find the index i of the largest time in the times array that is less than or equal to t. It then returns the leader at that index in the leads array.

# Complexity
- Time complexity:
The time complexity of the constructor is O(N), where N is the length of the input persons and times arrays. This is because we need to iterate through the arrays once to compute the leads array.

The time complexity of the q method is O(log N), where N is the length of the input times array. This is because we use binary search to find the index of the largest time that is less than or equal to t.








- Space complexity:
The space complexity of the TopVotedCandidate class is O(N), where N is the length of the input persons and times arrays. This is because we store the input arrays and the leads array, which each take up O(N) space. The space complexity of the q method is O(1), because we only use a constant amount of extra space for the lo, hi, and mid variables used in binary search.

# Code
```
class TopVotedCandidate {
    int[] times;
    int[] leads;

    public TopVotedCandidate(int[] persons, int[] times) {
        int n = persons.length;
        this.times = times;
        leads = new int[n];

        int[] votes = new int[n];
        int maxVotes = 0, leader = -1;

        for (int i = 0; i < n; i++) {
            int p = persons[i];
            int t = times[i];

            votes[p]++;
            if (votes[p] >= maxVotes) {
                maxVotes = votes[p];
                leader = p;
            }

            leads[i] = leader;
        }
    }

    public int q(int t) {
        int lo = 0, hi = times.length - 1;
        while (lo < hi) {
            int mid = (lo + hi + 1) / 2;
            if (times[mid] <= t) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return leads[lo];
    }
}

```