# Enhanced Breadth first search solution fully explained.

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/2930302/](https://leetcode.com/problems/keys-and-rooms/solutions/2930302/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->


# Approach
<!-- Describe your approach to solving the problem. -->
**Let's set up our variables:**

1. `n` is the number of rooms, which is obtained by calling len on the input `rooms`.
2. `count` is a counter that is initially set to 1. This counter will be used to keep track of how many rooms have been visited.
3. `visited` is a list of booleans of length n, with all elements initially set to false. This list will be used to keep track of which rooms have been visited.
4. `keys` is a list containing a single element, 0. This list will be used to keep track of which rooms are currently being considered for visiting.

The function then sets the first element of visited to true, indicating that the first room has been visited. Vec

The function then enters a loop that continues until `keys` is empty. Inside the loop, the function:

1. Creates a new empty list called `temp`.
2. Iterates over the elements in `keys`. For each element, key, it:
    1. Iterates over the elements in `rooms[key]`, which are the keys to rooms that can be accessed from the current room.
    2. For each of these keys, `roomkey`, it checks if the corresponding room has been visited (by checking the corresponding element in visited). 
    3. If the room has not been visited, the function:
        1. Increments the count variable.
        2. Adds the room's key to `temp`.
        3. Marks the room as visited.
3. Assigns the `temp` list to the `keys` variable.
After the loop, the function returns true if count is equal to n, and false otherwise.

This function uses a breadth-first search algorithm by maintaining a queue of nodes to visit. The `keys` list serves as a queue. The ``visited`` list is used to keep track of which rooms have already been visited, so that the function doesn't visit the same room multiple times.

# Complexity
- Time complexity: $$O(n)$$.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: The space complexity is $$O(n)$$, as the function uses a fixed amount of space for each input size. This is because the visited and keys vectors have a fixed size of n, and the `temp` vector has a size that is at most equal to n.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

Consistently beats 100% of all submitted solutions for rust and java.

# Code
## Java
```
class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        int n = rooms.size();
        int count = 1;
        boolean[] visited = new boolean[n];
        visited[0] = true;
        List<Integer> keys = new ArrayList<>();
        keys.add(0);

        while (!keys.isEmpty()) {
            List<Integer> temp = new ArrayList<>();
            for (int key : keys) {
                for (int room : rooms.get(key)) {
                    int roomkey = room;
                    if (!visited[roomkey]) {
                        count++;
                        temp.add(roomkey);
                        visited[roomkey] = true;
                    }
                }
            }
            keys = temp;
        }

        return count == n;
    }
}

```

## Rust
```
impl Solution {
    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {
        let (n, mut count) = (rooms.len(), 1);
        let (mut visited, mut keys) = (vec![false; n], vec![0]);
        visited[0] = true;

        while !keys.is_empty() {
            let mut temp = Vec::new();
            for key in keys {
                for room in rooms[key].iter() {
                    let roomkey = *room as usize;
                    if !visited[roomkey] {
                        count += 1;
                        temp.push(roomkey);
                        visited[roomkey] = true;
                    }
                }
            }
            keys = temp;
        }
        count == n
    }
}

```

## Python
```
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        n = len(rooms)
        count = 1
        visited = [False] * n
        visited[0] = True
        keys = [0]

        while keys:
            temp = []
            for key in keys:
                for room in rooms[key]:
                    roomkey = room
                    if not visited[roomkey]:
                        count += 1
                        temp.append(roomkey)
                        visited[roomkey] = True
            keys = temp

        return count == n

```

## C++
```
class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = rooms.size();
        int count = 1;
        vector<bool> visited(n, false);
        visited[0] = true;
        vector<int> keys{0};

        while (!keys.empty()) {
            vector<int> temp;
            for (int key : keys) {
                for (int room : rooms[key]) {
                    int roomkey = room;
                    if (!visited[roomkey]) {
                        count += 1;
                        temp.push_back(roomkey);
                        visited[roomkey] = true;
                    }
                }
            }
            keys = temp;
        }

        return count == n;
    }
};

```