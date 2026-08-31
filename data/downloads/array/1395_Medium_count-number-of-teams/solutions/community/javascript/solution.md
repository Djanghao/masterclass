# Beats 100 % O(n log n) | Binary Index Tree | Java | Python | C++ | JavaScript/TypeScript | Go | Rust

**Author:** kartikdevsharma_
**Votes:** 61
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/5542382/](https://leetcode.com/problems/count-number-of-teams/solutions/5542382/)

---

# Problem Overview:

The problem presents a scenario involving a line of soldiers, each with a unique rating. The task is to form teams under specific conditions:

1. **Team Composition:**
   - Each team must consist of exactly 3 soldiers.

2. **Selection Criteria:**
   - The soldiers in a team must be chosen from left to right in the line.
   - This means if we select soldiers at positions i, j, and k, then i < j < k must be true.

3. **Rating Requirements:**
   - The ratings of the selected soldiers must follow one of two patterns:
     a) Strictly increasing: rating[i] < rating[j] < rating[k]
     b) Strictly decreasing: rating[i] > rating[j] > rating[k]

4. **Multiple Team Participation:**
   - A soldier can be part of multiple teams.

5. **Goal:**
   - Count the total number of valid teams that can be formed following these rules.

**Key Considerations:**
- The order of soldiers in the line is crucial and cannot be changed.
- The uniqueness of ratings ensures no two soldiers have the same rating.
- We need to consider both ascending and descending rating patterns.
- The same trio of soldiers should not be counted twice (once for ascending and once for descending).

**Constraints:**
- The number of soldiers (n) is between 3 and 1000.
- Each rating is a positive integer not exceeding 10^5.
- All ratings are unique.

The challenge lies in efficiently counting all valid teams without explicitly forming each team, especially for larger inputs where a brute-force approach would be time-consuming.

---
# Binary Index Tree
### Intuition

The problem asks us to count the number of valid teams of three soldiers that can be formed from a line of soldiers, where each soldier has a unique rating. A valid team must satisfy either an ascending or descending order of ratings, and the soldiers must be in the correct order in the line.

The key insight is that for each soldier, we need to count how many valid pairs of soldiers we can form with this soldier as the middle element. This means we need to find:
1. For ascending order: How many soldiers to the left have a lower rating, and how many to the right have a higher rating.
2. For descending order: How many soldiers to the left have a higher rating, and how many to the right have a lower rating.

The product of these two counts will give us the number of valid teams for each soldier as the middle element. Summing this for all soldiers will give us the total number of valid teams.

### Approach


1. **Preprocessing**:
   - Create a list of Soldier objects, each containing the rating and original index.
   - Sort this list based on the ratings.
   - Create an index map that maps each soldier's original index to their position in the sorted list.

2. **Counting Teams**:
   - Use a Binary Indexed Tree (BIT) or Fenwick Tree to efficiently count the number of soldiers with ratings less than or greater than a given rating.
   - Iterate through the soldiers in their original order.
   - For each soldier, count the number of valid teams they can form as the middle element, both for ascending and descending order.

3. **Binary Indexed Tree (BIT)**:
   - Use a BIT to perform efficient range sum queries and updates.
   - This allows us to count the number of soldiers with ratings less than or greater than a given rating in logarithmic time.

**Pseudo-code** for the approach:

```
function numTeams(rating):
    n = length of rating
    if n < 3:
        return 0

    // Create and sort list of soldiers
    soldiers = empty list
    for i from 0 to n-1:
        add Soldier(rating[i], i) to soldiers
    sort soldiers by rating

    // Create index map
    indexMap = array of size n
    for i from 0 to n-1:
        indexMap[soldiers[i].index] = i

    teams = 0
    
    // Count ascending teams
    teams += countTeams(indexMap, n, ascending=true)
    
    // Count descending teams
    teams += countTeams(indexMap, n, ascending=false)
    
    return teams

function countTeams(indexMap, n, ascending):
    bit = array of size n+1 initialized with zeros
    teams = 0

    for i from 0 to n-1:
        rank = indexMap[i] + 1
        
        if ascending:
            left = getSum(bit, rank - 1)
            right = n - rank - (getSum(bit, n) - getSum(bit, rank))
        else:
            left = getSum(bit, n) - getSum(bit, rank)
            right = rank - 1 - getSum(bit, rank - 1)
        
        teams += left * right
        update(bit, rank, 1)
    
    return teams

function update(bit, index, val):
    while index < length of bit:
        bit[index] += val
        index += index & (-index)

function getSum(bit, index):
    sum = 0
    while index > 0:
        sum += bit[index]
        index -= index & (-index)
    return sum

class Soldier:
    rating: integer
    index: integer

    constructor(rating, index):
        this.rating = rating
        this.index = index

    compareTo(other):
        return this.rating - other.rating
```

Let's go through the main steps in more detail:

1. **Preprocessing**:
   - We create a list of Soldier objects, each containing the rating and the original index of a soldier.
   - We sort this list based on the ratings. This gives us the relative order of soldiers by their ratings.
   - We create an index map that, for each soldier's original index, stores their position in the sorted list. This allows us to quickly find out how many soldiers have a lower or higher rating than a given soldier.

2. **Counting Teams**:
   - We use a function `countTeams` to count the number of valid teams for both ascending and descending order.
   - For each soldier (in their original order):
     - We find their rank (position in the sorted list) using the index map.
     - We count how many soldiers to their left have a lower rating (for ascending) or higher rating (for descending).
     - We count how many soldiers to their right have a higher rating (for ascending) or lower rating (for descending).
     - The product of these two counts gives us the number of valid teams with this soldier as the middle element.
     - We add this to our total count of teams.

3. **Binary Indexed Tree (BIT)**:
   - We use a BIT to efficiently perform range sum queries and updates.
   - The BIT is used to keep track of how many soldiers we've seen so far with each rating.
   - The `update` function adds a soldier to the BIT.
   - The `getSum` function counts how many soldiers we've seen so far with a rating less than or equal to a given rating.

The key to the efficiency of this algorithm is the use of the Binary Indexed Tree. It allows us to perform both updates and queries in O(log n) time, which is crucial for the overall time complexity of the algorithm.

### Dry Run

Let's use the example: rating = [2, 5, 3, 4, 1]

1. **Create and sort Soldier objects:**

   | Original Index | 0 | 1 | 2 | 3 | 4 |
   |----------------|---|---|---|---|---|
   | Rating         | 2 | 5 | 3 | 4 | 1 |
   | Sorted Order   | 1 | 5 | 2 | 3 | 4 |
   | Sorted Index   | 0 | 4 | 1 | 2 | 3 |

2. **Create indexMap:**

   | Original Index | 0 | 1 | 2 | 3 | 4 |
   |----------------|---|---|---|---|---|
   | indexMap value | 1 | 4 | 2 | 3 | 0 |

3. **Count ascending teams:**
   We process soldiers in their original order, using the BIT to count smaller elements to the left.

   | Step | Index | Rating | Smaller Left | Larger Right | Teams | BIT Update |
   |------|-------|--------|--------------|--------------|-------|------------|
   | 1    | 0     | 2      | 0            | 3            | 0     | [0,1,0,0,0,0] |
   | 2    | 1     | 5      | 1            | 0            | 0     | [0,1,0,0,0,1] |
   | 3    | 2     | 3      | 1            | 1            | 1     | [0,1,0,1,0,1] |
   | 4    | 3     | 4      | 2            | 0            | 0     | [0,1,0,1,1,1] |
   | 5    | 4     | 1      | 0            | 4            | 0     | [1,1,0,1,1,1] |

   Total ascending teams: 1

4. **Count descending teams:**
   We process soldiers in reverse order, using the BIT to count larger elements to the left.

   | Step | Index | Rating | Larger Left | Smaller Right | Teams | BIT Update |
   |------|-------|--------|-------------|---------------|-------|------------|
   | 1    | 4     | 1      | 0           | 0             | 0     | [0,1,0,0,0,0] |
   | 2    | 3     | 4      | 1           | 1             | 1     | [0,1,0,0,1,0] |
   | 3    | 2     | 3      | 1           | 1             | 1     | [0,1,0,1,1,0] |
   | 4    | 1     | 5      | 3           | 0             | 0     | [0,1,0,1,1,1] |
   | 5    | 0     | 2      | 1           | 1             | 1     | [0,1,1,1,1,1] |

   Total descending teams: 3

5. **Final result:**
   Total teams = Ascending teams + Descending teams = 1 + 3 = 4

This is how we process each soldier, using the BIT to efficiently count the number of valid teams they can form as the middle member. The BIT allows us to quickly query the count of elements to the left that satisfy our condition (smaller for ascending, larger for descending) and update these counts.

The final answer of 4 represents all valid teams: (2,3,4), (5,3,1), (5,4,1), and (5,3,2).

### Complexity

- **Time complexity: O(n log n)**
  - Sorting the soldiers takes O(n log n) time.
  - We iterate through all soldiers once, and for each soldier, we perform constant number of BIT operations, each taking O(log n) time.
  - Therefore, the overall time complexity is O(n log n).

- **Space complexity: O(n)**
  - We use additional space for the list of soldiers, the index map, and the BIT, each of size O(n).
  - Therefore, the overall space complexity is O(n).

---

### Code
```Java []
import java.util.*;

class Solution {
    public int numTeams(int[] rating) {
        int n = rating.length;
        if (n < 3) return 0;
        
        // Create a list of soldiers with their ratings and indices
        List<Soldier> soldiers = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            soldiers.add(new Soldier(rating[i], i));
        }
        
        // Sort soldiers by rating
        Collections.sort(soldiers);
        
        int[] indexMap = new int[n];
        for (int i = 0; i < n; i++) {
            indexMap[soldiers.get(i).index] = i;
        }
        
        int teams = 0;
        
        // Count ascending teams
        teams += countTeams(indexMap, n, true);
        
        // Count descending teams
        teams += countTeams(indexMap, n, false);
        
        return teams;
    }
    
    private int countTeams(int[] indexMap, int n, boolean ascending) {
        int[] bit = new int[n + 1];
        int teams = 0;
        
        for (int i = 0; i < n; i++) {
            int rank = indexMap[i] + 1;
            int left = ascending ? getSum(bit, rank - 1) : getSum(bit, n) - getSum(bit, rank);
            int right = ascending ? n - rank - (getSum(bit, n) - getSum(bit, rank)) : rank - 1 - getSum(bit, rank - 1);
            teams += left * right;
            update(bit, rank, 1);
        }
        
        return teams;
    }
    
    private void update(int[] bit, int index, int val) {
        while (index < bit.length) {
            bit[index] += val;
            index += index & (-index);
        }
    }
    
    private int getSum(int[] bit, int index) {
        int sum = 0;
        while (index > 0) {
            sum += bit[index];
            index -= index & (-index);
        }
        return sum;
    }
    
    private class Soldier implements Comparable<Soldier> {
        int rating;
        int index;
        
        Soldier(int rating, int index) {
            this.rating = rating;
            this.index = index;
        }
        
        @Override
        public int compareTo(Soldier other) {
            return Integer.compare(this.rating, other.rating);
        }
    }
}
```
```C++ []
class Solution {
public:
    int numTeams(vector<int>& rating) {
        int n = rating.size();
        if (n < 3) return 0;
        
        vector<pair<int, int>> soldiers;
        for (int i = 0; i < n; i++) {
            soldiers.push_back({rating[i], i});
        }
        sort(soldiers.begin(), soldiers.end());
        
        vector<int> indexMap(n);
        for (int i = 0; i < n; i++) {
            indexMap[soldiers[i].second] = i;
        }
        
        return countTeams(indexMap, n, true) + countTeams(indexMap, n, false);
    }
    
private:
    int countTeams(const vector<int>& indexMap, int n, bool ascending) {
        vector<int> bit(n + 1, 0);
        int teams = 0;
        
        for (int i = 0; i < n; i++) {
            int rank = indexMap[i] + 1;
            int left = ascending ? getSum(bit, rank - 1) : getSum(bit, n) - getSum(bit, rank);
            int right = ascending ? n - rank - (getSum(bit, n) - getSum(bit, rank)) : rank - 1 - getSum(bit, rank - 1);
            teams += left * right;
            update(bit, rank, 1);
        }
        
        return teams;
    }
    
    void update(vector<int>& bit, int index, int val) {
        while (index < bit.size()) {
            bit[index] += val;
            index += index & (-index);
        }
    }
    
    int getSum(const vector<int>& bit, int index) {
        int sum = 0;
        while (index > 0) {
            sum += bit[index];
            index -= index & (-index);
        }
        return sum;
    }
};
```
```Python []
class Solution:
    def numTeams(self, rating: List[int]) -> int:
        n = len(rating)
        if n < 3:
            return 0
        
        soldiers = sorted([(r, i) for i, r in enumerate(rating)])
        index_map = [0] * n
        for i, (_, idx) in enumerate(soldiers):
            index_map[idx] = i
        
        def count_teams(ascending: bool) -> int:
            bit = [0] * (n + 1)
            teams = 0
            
            for i in range(n):
                rank = index_map[i] + 1
                left = self.get_sum(bit, rank - 1) if ascending else self.get_sum(bit, n) - self.get_sum(bit, rank)
                right = n - rank - (self.get_sum(bit, n) - self.get_sum(bit, rank)) if ascending else rank - 1 - self.get_sum(bit, rank - 1)
                teams += left * right
                self.update(bit, rank, 1)
            
            return teams
        
        return count_teams(True) + count_teams(False)
    
    def update(self, bit: List[int], index: int, val: int) -> None:
        while index < len(bit):
            bit[index] += val
            index += index & (-index)
    
    def get_sum(self, bit: List[int], index: int) -> int:
        total = 0
        while index > 0:
            total += bit[index]
            index -= index & (-index)
        return total
```
```Go []
func numTeams(rating []int) int {
    n := len(rating)
    if n < 3 {
        return 0
    }
    
    type soldier struct {
        rating, index int
    }
    
    soldiers := make([]soldier, n)
    for i, r := range rating {
        soldiers[i] = soldier{r, i}
    }
    sort.Slice(soldiers, func(i, j int) bool {
        return soldiers[i].rating < soldiers[j].rating
    })
    
    indexMap := make([]int, n)
    for i, s := range soldiers {
        indexMap[s.index] = i
    }
    
    countTeams := func(ascending bool) int {
        bit := make([]int, n+1)
        teams := 0
        
        for i := 0; i < n; i++ {
            rank := indexMap[i] + 1
            var left, right int
            if ascending {
                left = getSum(bit, rank-1)
                right = n - rank - (getSum(bit, n) - getSum(bit, rank))
            } else {
                left = getSum(bit, n) - getSum(bit, rank)
                right = rank - 1 - getSum(bit, rank-1)
            }
            teams += left * right
            update(bit, rank, 1)
        }
        
        return teams
    }
    
    return countTeams(true) + countTeams(false)
}

func update(bit []int, index, val int) {
    for index < len(bit) {
        bit[index] += val
        index += index & (-index)
    }
}

func getSum(bit []int, index int) int {
    sum := 0
    for index > 0 {
        sum += bit[index]
        index -= index & (-index)
    }
    return sum
}
```
```Rust []
impl Solution {
    pub fn num_teams(rating: Vec<i32>) -> i32 {
        let n = rating.len();
        if n < 3 {
            return 0;
        }
        
        let mut soldiers: Vec<(i32, usize)> = rating.iter().enumerate().map(|(i, &r)| (r, i)).collect();
        soldiers.sort_unstable_by_key(|&(r, _)| r);
        
        let mut index_map = vec![0; n];
        for (i, &(_, idx)) in soldiers.iter().enumerate() {
            index_map[idx] = i;
        }
        
        let count_teams = |ascending: bool| -> i32 {
            let mut bit = vec![0; n + 1];
            let mut teams = 0;
            
            for i in 0..n {
                let rank = index_map[i] + 1;
                let left = if ascending {
                    Self::get_sum(&bit, rank - 1)
                } else {
                    Self::get_sum(&bit, n) - Self::get_sum(&bit, rank)
                };
                let right = if ascending {
                    n - rank - (Self::get_sum(&bit, n) - Self::get_sum(&bit, rank))
                } else {
                    rank - 1 - Self::get_sum(&bit, rank - 1)
                };
                teams += left * right;
                Self::update(&mut bit, rank, 1);
            }
            
            teams as i32
        };
        
        count_teams(true) + count_teams(false)
    }
    
    fn update(bit: &mut Vec<usize>, mut index: usize, val: usize) {
        while index < bit.len() {
            bit[index] += val;
            index += index & (!index + 1);
        }
    }
    
    fn get_sum(bit: &Vec<usize>, mut index: usize) -> usize {
        let mut sum = 0;
        while index > 0 {
            sum += bit[index];
            index -= index & (!index + 1);
        }
        sum
    }
}
```
```JavaScript []
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    const n = rating.length;
    if (n < 3) return 0;
    
    const soldiers = rating.map((r, i) => [r, i]).sort((a, b) => a[0] - b[0]);
    const indexMap = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        indexMap[soldiers[i][1]] = i;
    }
    
    const countTeams = (ascending) => {
        const bit = new Array(n + 1).fill(0);
        let teams = 0;
        
        for (let i = 0; i < n; i++) {
            const rank = indexMap[i] + 1;
            const left = ascending ? getSum(bit, rank - 1) : getSum(bit, n) - getSum(bit, rank);
            const right = ascending ? n - rank - (getSum(bit, n) - getSum(bit, rank)) : rank - 1 - getSum(bit, rank - 1);
            teams += left * right;
            update(bit, rank, 1);
        }
        
        return teams;
    };
    
    const update = (bit, index, val) => {
        while (index < bit.length) {
            bit[index] += val;
            index += index & (-index);
        }
    };
    
    const getSum = (bit, index) => {
        let sum = 0;
        while (index > 0) {
            sum += bit[index];
            index -= index & (-index);
        }
        return sum;
    };
    
    return countTeams(true) + countTeams(false);
};
```
```TypeScript []
function numTeams(rating: number[]): number {
    const n: number = rating.length;
    if (n < 3) return 0;
    
    const soldiers: [number, number][] = rating.map((r, i): [number, number] => [r, i]).sort((a, b) => a[0] - b[0]);
    const indexMap: number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        indexMap[soldiers[i][1]] = i;
    }
    
    const countTeams = (ascending: boolean): number => {
        const bit: number[] = new Array(n + 1).fill(0);
        let teams: number = 0;
        
        for (let i = 0; i < n; i++) {
            const rank: number = indexMap[i] + 1;
            const left: number = ascending ? getSum(bit, rank - 1) : getSum(bit, n) - getSum(bit, rank);
            const right: number = ascending ? n - rank - (getSum(bit, n) - getSum(bit, rank)) : rank - 1 - getSum(bit, rank - 1);
            teams += left * right;
            update(bit, rank, 1);
        }
        
        return teams;
    };
    
    const update = (bit: number[], index: number, val: number): void => {
        while (index < bit.length) {
            bit[index] += val;
            index += index & (-index);
        }
    };
    
    const getSum = (bit: number[], index: number): number => {
        let sum: number = 0;
        while (index > 0) {
            sum += bit[index];
            index -= index & (-index);
        }
        return sum;
    };
    
    return countTeams(true) + countTeams(false);
}

```
---

# Approach 2

### Intuition

This approach for the problem is based on the observation that for each soldier, we can count the number of valid teams they can be a part of by considering them as the middle element of a team. 

The key insights are:
1. For each soldier, we need to count how many soldiers to their left have lower and higher ratings.
2. Similarly, we need to count how many soldiers to their right have lower and higher ratings.
3. The number of ascending teams with this soldier as the middle element is the product of lower ratings to the left and higher ratings to the right.
4. The number of descending teams with this soldier as the middle element is the product of higher ratings to the left and lower ratings to the right.
5. By summing these counts for all soldiers, we get the total number of valid teams.

This approach doesn't use traditional dynamic programming with memoization, but it does use the principle of breaking down the problem into smaller subproblems and combining their results.

### Approach

1. **Iterate through all soldiers:**
   - For each soldier, consider them as the potential middle element of a team.

2. **Count smaller and larger elements:**
   - For each soldier, count the number of soldiers with smaller and larger ratings to their left and right.

3. **Calculate teams:**
   - For ascending teams: multiply the count of smaller ratings to the left with larger ratings to the right.
   - For descending teams: multiply the count of larger ratings to the left with smaller ratings to the right.

4. **Sum up all teams:**
   - Add the number of ascending and descending teams for each soldier to get the total count.

# Pseudo-code

```
function numTeams(rating):
    totalTeams = 0
    soldierCount = length of rating

    for currentSoldier from 0 to soldierCount - 1:
        totalTeams += countTeams(rating, currentSoldier, soldierCount)

    return totalTeams

function countTeams(rating, currentSoldier, soldierCount):
    leftCounts = countSmallerAndLarger(rating, 0, currentSoldier, rating[currentSoldier])
    rightCounts = countSmallerAndLarger(rating, currentSoldier + 1, soldierCount, rating[currentSoldier])

    ascendingTeams = leftCounts[0] * rightCounts[1]
    descendingTeams = leftCounts[1] * rightCounts[0]

    return ascendingTeams + descendingTeams

function countSmallerAndLarger(rating, start, end, reference):
    smaller = 0
    larger = 0

    for i from start to end - 1:
        if rating[i] < reference:
            smaller++
        else if rating[i] > reference:
            larger++

    return [smaller, larger]
```

### Dry Run

Let's use the example: rating = [2, 5, 3, 4, 1]

We'll go through the process for each soldier:

1. **Soldier with rating 2 (index 0):**
   - Left counts: [] -> [0, 0]
   - Right counts: [5, 3, 4, 1] -> [1, 3]
   - Ascending teams: 0 * 3 = 0
   - Descending teams: 0 * 1 = 0
   - Total teams: 0

2. **Soldier with rating 5 (index 1):**
   - Left counts: [2] -> [1, 0]
   - Right counts: [3, 4, 1] -> [3, 0]
   - Ascending teams: 1 * 0 = 0
   - Descending teams: 0 * 3 = 0
   - Total teams: 0

3. **Soldier with rating 3 (index 2):**
   - Left counts: [2, 5] -> [1, 1]
   - Right counts: [4, 1] -> [1, 1]
   - Ascending teams: 1 * 1 = 1
   - Descending teams: 1 * 1 = 1
   - Total teams: 2

4. **Soldier with rating 4 (index 3):**
   - Left counts: [2, 5, 3] -> [2, 1]
   - Right counts: [1] -> [1, 0]
   - Ascending teams: 2 * 0 = 0
   - Descending teams: 1 * 1 = 1
   - Total teams: 1

5. **Soldier with rating 1 (index 4):**
   - Left counts: [2, 5, 3, 4] -> [0, 4]
   - Right counts: [] -> [0, 0]
   - Ascending teams: 0 * 0 = 0
   - Descending teams: 4 * 0 = 0
   - Total teams: 0

Total teams = 0 + 0 + 2 + 1 + 0 = 3

The final answer of 3 represents all valid teams: (2,3,4), (5,3,1), and (5,4,1).

### Complexity

- **Time complexity: O(n^2)**
  - We iterate through all n soldiers.
  - For each soldier, we count smaller and larger elements to their left and right, which takes O(n) time.
  - Therefore, the overall time complexity is O(n^2).

- **Space complexity: O(1)**
  - We only use a constant amount of extra space for variables and small arrays.
  - The space complexity is independent of the input size.

This approach trades time complexity for space complexity compared to the Binary Indexed Tree approach. It's simpler to implement and uses less space, but it's less efficient for larger inputs due to its quadratic time complexity.

---
### Code

```Java []
class Solution {
    public int numTeams(int[] rating) {
        int totalTeams = 0;
        int soldierCount = rating.length;

        for (int currentSoldier = 0; currentSoldier < soldierCount; currentSoldier++) {
            totalTeams += countTeams(rating, currentSoldier, soldierCount);
        }

        return totalTeams;
    }

    private int countTeams(int[] rating, int currentSoldier, int soldierCount) {
        int[] leftCounts = countSmallerAndLarger(rating, 0, currentSoldier, rating[currentSoldier]);
        int[] rightCounts = countSmallerAndLarger(rating, currentSoldier + 1, soldierCount, rating[currentSoldier]);

        int ascendingTeams = leftCounts[0] * rightCounts[1];
        int descendingTeams = leftCounts[1] * rightCounts[0];

        return ascendingTeams + descendingTeams;
    }

    private int[] countSmallerAndLarger(int[] rating, int start, int end, int reference) {
        int smaller = 0, larger = 0;

        for (int i = start; i < end; i++) {
            if (rating[i] < reference) {
                smaller++;
            } else if (rating[i] > reference) {
                larger++;
            }
        }

        return new int[]{smaller, larger};
    }
}
```
```C++ []
class Solution {
public:
    int numTeams(vector<int>& rating) {
        int totalTeams = 0;
        int soldierCount = rating.size();

        for (int currentSoldier = 0; currentSoldier < soldierCount; currentSoldier++) {
            totalTeams += countTeams(rating, currentSoldier, soldierCount);
        }

        return totalTeams;
    }

private:
    int countTeams(const vector<int>& rating, int currentSoldier, int soldierCount) {
        auto leftCounts = countSmallerAndLarger(rating, 0, currentSoldier, rating[currentSoldier]);
        auto rightCounts = countSmallerAndLarger(rating, currentSoldier + 1, soldierCount, rating[currentSoldier]);

        int ascendingTeams = leftCounts.first * rightCounts.second;
        int descendingTeams = leftCounts.second * rightCounts.first;

        return ascendingTeams + descendingTeams;
    }

    pair<int, int> countSmallerAndLarger(const vector<int>& rating, int start, int end, int reference) {
        int smaller = 0, larger = 0;

        for (int i = start; i < end; i++) {
            if (rating[i] < reference) {
                smaller++;
            } else if (rating[i] > reference) {
                larger++;
            }
        }

        return {smaller, larger};
    }
};
```
```Python []
class Solution:
    def numTeams(self, rating: List[int]) -> int:
        total_teams = 0
        soldier_count = len(rating)

        for current_soldier in range(soldier_count):
            total_teams += self.count_teams(rating, current_soldier, soldier_count)

        return total_teams

    def count_teams(self, rating: List[int], current_soldier: int, soldier_count: int) -> int:
        left_counts = self.count_smaller_and_larger(rating, 0, current_soldier, rating[current_soldier])
        right_counts = self.count_smaller_and_larger(rating, current_soldier + 1, soldier_count, rating[current_soldier])

        ascending_teams = left_counts[0] * right_counts[1]
        descending_teams = left_counts[1] * right_counts[0]

        return ascending_teams + descending_teams

    def count_smaller_and_larger(self, rating: List[int], start: int, end: int, reference: int) -> Tuple[int, int]:
        smaller, larger = 0, 0

        for i in range(start, end):
            if rating[i] < reference:
                smaller += 1
            elif rating[i] > reference:
                larger += 1

        return smaller, larger
```
```Go []
func numTeams(rating []int) int {
    totalTeams := 0
    soldierCount := len(rating)

    for currentSoldier := 0; currentSoldier < soldierCount; currentSoldier++ {
        totalTeams += countTeams(rating, currentSoldier, soldierCount)
    }

    return totalTeams
}

func countTeams(rating []int, currentSoldier, soldierCount int) int {
    leftCounts := countSmallerAndLarger(rating, 0, currentSoldier, rating[currentSoldier])
    rightCounts := countSmallerAndLarger(rating, currentSoldier+1, soldierCount, rating[currentSoldier])

    ascendingTeams := leftCounts[0] * rightCounts[1]
    descendingTeams := leftCounts[1] * rightCounts[0]

    return ascendingTeams + descendingTeams
}

func countSmallerAndLarger(rating []int, start, end, reference int) [2]int {
    smaller, larger := 0, 0

    for i := start; i < end; i++ {
        if rating[i] < reference {
            smaller++
        } else if rating[i] > reference {
            larger++
        }
    }

    return [2]int{smaller, larger}
}
```
```Rust []
impl Solution {
    pub fn num_teams(rating: Vec<i32>) -> i32 {
        let mut total_teams = 0;
        let soldier_count = rating.len();

        for current_soldier in 0..soldier_count {
            total_teams += Self::count_teams(&rating, current_soldier, soldier_count);
        }

        total_teams
    }

    fn count_teams(rating: &[i32], current_soldier: usize, soldier_count: usize) -> i32 {
        let left_counts = Self::count_smaller_and_larger(rating, 0, current_soldier, rating[current_soldier]);
        let right_counts = Self::count_smaller_and_larger(rating, current_soldier + 1, soldier_count, rating[current_soldier]);

        let ascending_teams = left_counts.0 * right_counts.1;
        let descending_teams = left_counts.1 * right_counts.0;

        ascending_teams + descending_teams
    }

    fn count_smaller_and_larger(rating: &[i32], start: usize, end: usize, reference: i32) -> (i32, i32) {
        let mut smaller = 0;
        let mut larger = 0;

        for i in start..end {
            if rating[i] < reference {
                smaller += 1;
            } else if rating[i] > reference {
                larger += 1;
            }
        }

        (smaller, larger)
    }
}
```
```JavaScript []
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let totalTeams = 0;
    const soldierCount = rating.length;

    for (let currentSoldier = 0; currentSoldier < soldierCount; currentSoldier++) {
        totalTeams += countTeams(rating, currentSoldier, soldierCount);
    }

    return totalTeams;
};

function countTeams(rating, currentSoldier, soldierCount) {
    const leftCounts = countSmallerAndLarger(rating, 0, currentSoldier, rating[currentSoldier]);
    const rightCounts = countSmallerAndLarger(rating, currentSoldier + 1, soldierCount, rating[currentSoldier]);

    const ascendingTeams = leftCounts[0] * rightCounts[1];
    const descendingTeams = leftCounts[1] * rightCounts[0];

    return ascendingTeams + descendingTeams;
}

function countSmallerAndLarger(rating, start, end, reference) {
    let smaller = 0, larger = 0;

    for (let i = start; i < end; i++) {
        if (rating[i] < reference) {
            smaller++;
        } else if (rating[i] > reference) {
            larger++;
        }
    }

    return [smaller, larger];
}
```
```TypeScript []
function numTeams(rating: number[]): number {
    let totalTeams = 0;
    const soldierCount = rating.length;

    for (let currentSoldier = 0; currentSoldier < soldierCount; currentSoldier++) {
        totalTeams += countTeams(rating, currentSoldier, soldierCount);
    }

    return totalTeams;
}

function countTeams(rating: number[], currentSoldier: number, soldierCount: number): number {
    const leftCounts = countSmallerAndLarger(rating, 0, currentSoldier, rating[currentSoldier]);
    const rightCounts = countSmallerAndLarger(rating, currentSoldier + 1, soldierCount, rating[currentSoldier]);

    const ascendingTeams = leftCounts[0] * rightCounts[1];
    const descendingTeams = leftCounts[1] * rightCounts[0];

    return ascendingTeams + descendingTeams;
}

function countSmallerAndLarger(rating: number[], start: number, end: number, reference: number): [number, number] {
    let smaller = 0, larger = 0;

    for (let i = start; i < end; i++) {
        if (rating[i] < reference) {
            smaller++;
        } else if (rating[i] > reference) {
            larger++;
        }
    }

    return [smaller, larger];
}
```