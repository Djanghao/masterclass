# 🔥More Than One Way 🔥|🔥😎 Detail Explanation |🔥

**Author:** Akhilesh21
**Votes:** 46
**Link:** [https://leetcode.com/problems/seat-reservation-manager/solutions/4254602/](https://leetcode.com/problems/seat-reservation-manager/solutions/4254602/)

---

Here's a general approach to solving this problem:

1. Initialize a data structure to efficiently track available seats. You could use a min-heap, a priority queue, or a custom data structure that can efficiently provide the smallest available seat.

2. In the reserve method, fetch the smallest available seat from your data structure, mark it as reserved, and return its number. You will need to remove it from the data structure so that it's not considered for the next reservation.

3. In the unreserve method, unreserve the specified seat by marking it as available again in your data structure.

4. Ensure that your implementation respects the constraints and handles edge cases effectively.

>A "time limit exceeded" error typically indicates that your code is taking too long to execute and hasn't completed within the allowed time limit. It doesn't necessarily mean there is a logical error in your code; instead, it's a performance issue. Your code might be correct in terms of the algorithm and logic, but it may not be efficient enough to run within the specified time constraints.

# 1st Method :- Min Heap\uD83D\uDD25

## Intuition \uD83D\uDE80
The `SeatManager` class is designed to manage seat reservations in a system with a specific number of seats, denoted as 'n.' It maintains a priority queue (min-heap) to keep track of seat availability. When a user requests to reserve a seat, the class provides the smallest unreserved seat, and when a user unreserves a seat, the seat becomes available again. The goal is to efficiently allocate seats and maintain availability.


## Approach \uD83D\uDE80
1. **Initialization (Constructor):** In the constructor, the `SeatManager` class is initialized with the total number of seats 'n.' It creates a priority queue (`PriorityQueue<Integer> seats`) to keep track of available seats. The queue is initialized with seat numbers from 1 to 'n,' ensuring that all seats are initially available.

2. **Reserving a Seat (`reserve` method):** When a user requests to reserve a seat, the `reserve` method is called. It checks if there are available seats in the priority queue (`!seats.isEmpty()`). If there are available seats, it retrieves the smallest seat number by using `seats.poll()`, which removes and returns the smallest element from the priority queue. This reserved seat number is returned to the user. If there are no available seats, it returns -1 to indicate that no seat is available.

3. **Unreserving a Seat (`unreserve` method):** When a user unreserves a seat, the `unreserve` method is called, and the seat number that needs to be unreserved is provided as an argument. This method adds the seat number back to the priority queue using `seats.offer(seatNumber)`, effectively making the seat available again.


## \u2712\uFE0FCode
``` Java []
class SeatManager {
    private PriorityQueue<Integer> seats; // Declare a priority queue to manage seat reservations.

    // Constructor to initialize the SeatManager with 'n' seats.
    public SeatManager(int n) {
        seats = new PriorityQueue<>();
        // Initialize the priority queue with seat numbers from 1 to 'n'.
        for (int i = 1; i <= n; i++) {
            seats.offer(i);
        }
    }

    // Reserve a seat.
    public int reserve() {
        if (!seats.isEmpty()) { // Check if there are available seats in the priority queue.
            int reservedSeat = seats.poll(); // Get the smallest seat number from the queue.
            return reservedSeat; // Return the reserved seat number.
        } else {
            return -1; // Return -1 to indicate that there are no available seats.
        }
    }

    // Unreserve a seat.
    public void unreserve(int seatNumber) {
        seats.offer(seatNumber); // Add the unreserved seat back to the priority queue.
    }
}
```
``` C++ []
class SeatManager {
private:
    std::priority_queue<int, std::vector<int>, std::greater<int>> seats; // Declare a min-heap to manage seat reservations.

public:
    // Constructor to initialize the SeatManager with 'n' seats.
    SeatManager(int n) {
        // Initialize the min-heap with seat numbers from 1 to 'n'.
        for (int i = 1; i <= n; i++) {
            seats.push(i);
        }
    }

    // Reserve a seat.
    int reserve() {
        if (!seats.empty()) { // Check if there are available seats in the min-heap.
            int reservedSeat = seats.top(); // Get the smallest seat number from the heap.
            seats.pop(); // Remove the reserved seat from the heap.
            return reservedSeat; // Return the reserved seat number.
        } else {
            return -1; // Return -1 to indicate that there are no available seats.
        }
    }

    // Unreserve a seat.
    void unreserve(int seatNumber) {
        seats.push(seatNumber); // Add the unreserved seat back to the min-heap.
    }
};

```
``` Python []
class SeatManager:
    def __init__(self, n):
        self.seats = []  # Initialize an empty list to manage seat reservations.
        self.n = n

        # Initialize the list with seat numbers from 1 to 'n'.
        for i in range(1, n + 1):
            heapq.heappush(self.seats, i)

    # Reserve a seat.
    def reserve(self):
        if self.seats:  # Check if there are available seats in the list.
            reserved_seat = heapq.heappop(self.seats)  # Get the smallest seat number from the list.
            return reserved_seat  # Return the reserved seat number.
        else:
            return -1  # Return -1 to indicate that there are no available seats.

    # Unreserve a seat.
    def unreserve(self, seat_number):
        if 1 <= seat_number <= self.n:
            heapq.heappush(self.seats, seat_number)  # Add the unreserved seat back to the list.

```
``` JavaScript []
var SeatManager = function(n) {
    this.seats = Array.from({ length: n }, (_, index) => index + 1);
};


SeatManager.prototype.reserve = function() {
    if (this.seats.length > 0) {
        // Get the smallest seat number and remove it from the array.
        const reservedSeat = this.seats.shift();
        return reservedSeat;
    } else {
        return -1; // No available seats.
    }
};

SeatManager.prototype.unreserve = function(seatNumber) {
    // Add the unreserved seat back to the array.
    this.seats.push(seatNumber);
    // Ensure the array remains sorted (optional but efficient).
    this.seats.sort((a, b) => a - b);
};

```
``` C# []
// Error :- Time Limit Exceeded
public class SeatManager {
    private Queue<int> seats;

    public SeatManager(int n) {
        seats = new Queue<int>();
        for (int i = 1; i <= n; i++) {
            seats.Enqueue(i);
        }
    }

    public int Reserve() {
        if (seats.Count > 0) {
            // Get the smallest seat number and remove it from the queue.
            int reservedSeat = seats.Dequeue();
            return reservedSeat;
        } else {
            return -1; // No available seats.
        }
    }

    public void Unreserve(int seatNumber) {
        // Add the unreserved seat back to the queue.
        seats.Enqueue(seatNumber);
        // Ensure the queue remains sorted (optional but efficient).
        List<int> sortedSeats = new List<int>(seats);
        sortedSeats.Sort();
        seats = new Queue<int>(sortedSeats);
    }
}
```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: 
1. `SeatManager` Constructor (`SeatManager(int n)`):
   - Time Complexity: $$O(n * log n)$$
     - The constructor initializes the priority queue with seat numbers from 1 to 'n,' which requires inserting 'n' elements into the priority queue. Each insertion operation takes $$O(log n)$$ time in a priority queue, resulting in a total time complexity of $$O(n * log n)$$.

2. `reserve` Method:
   - Time Complexity: $$O(log n)$$
     - The `reserve` method performs a single operation on the priority queue, which is either polling the smallest element $$(O(log n))$$ or checking if the queue is empty $$(O(1))$$. In the worst case, it is $$O(log n)$$.

3. `unreserve` Method:
   - Time Complexity: $$O(log n)$$
     - The `unreserve` method performs a single operation on the priority queue, which is adding an element (seat number) back to the queue using `offer()`. This operation takes $$O(log n)$$ time in the worst case.

### \uD83C\uDFF9Space complexity:
1. `SeatManager` Constructor (`SeatManager(int n)`):
   - Space Complexity: $$O(n)$$
     - The space complexity of the constructor is determined by the size of the priority queue. It stores 'n' seat numbers, resulting in a space complexity of $$O(n)$$.

2. `reserve` Method:
   - Space Complexity: $$O(1)$$
     - The `reserve` method does not allocate any additional space that scales with the input 'n.' It only returns the seat number, so it has a constant space complexity.

3. `unreserve` Method:
   - Space Complexity: $$O(1)$$
     - Similar to the `reserve` method, the `unreserve` method does not require additional space that scales with 'n.' It simply adds a seat number back to the priority queue.


![vote.jpg](./images/0.jpeg)


---

# 2nd Method :- Bitmask / Bit manipulation\uD83D\uDD25

## Intuition \uD83D\uDE80
The SeatManager class is designed to manage the reservation state of seats, specifically tracking which seats are reserved and which ones are available. It uses a BitSet to represent the seat reservation status, where each bit in the BitSet corresponds to a seat. A set bit (1) indicates that the seat is reserved, and a clear bit (0) indicates that the seat is available.

## Approach \uD83D\uDE80
1. **Initialization (SeatManager Constructor):** When you create a SeatManager object with `new SeatManager(n)`, it initializes a BitSet with `n` bits, representing the `n` seats available. Initially, all bits are clear (0), indicating that all seats are available.

2. **Reserving a Seat (reserve Method):** When you call the `reserve` method, it finds the first unset (0) bit in the BitSet, which represents the lowest-numbered available seat. It does this using `seats.nextClearBit(0)`. The index of this unset bit corresponds to the seat number to be reserved. It sets this bit to 1 to mark the seat as reserved and returns the seat number. Since seat numbers are typically 1-based, you add 1 to the index to get the correct seat number.

3. **Unreserving a Seat (unreserve Method):** When you call the `unreserve` method with a seat number, it converts the seat number to a 0-based index by subtracting 1. It then checks if the corresponding bit is set (1), indicating that the seat is reserved. If the seat is reserved, it clears (sets to 0) the corresponding bit to mark the seat as unreserved.

The key idea is to use the BitSet to efficiently track the reservation status of seats. Finding the first unset bit allows you to reserve the lowest-numbered available seat quickly, and unreserving a seat is equally efficient by clearing the corresponding bit. This approach provides a fast and memory-efficient way to manage seat reservations.


## \u2712\uFE0FCode
Except java all codes faced time limit exceeded
``` Java []
class SeatManager {
    private BitSet seats; // Bitset to track seat reservation status

    public SeatManager(int n) {
        seats = new BitSet(n);
    }

    public int reserve() {
        int nextAvailableSeat = seats.nextClearBit(0); // Find the first unset (0) bit
        seats.set(nextAvailableSeat); // Reserve the seat (set the bit to 1)
        return nextAvailableSeat + 1; // Seat numbers are 1-based, so add 1
    }

    public void unreserve(int seatNumber) {
        // Convert the seat number to a 0-based index
        int seatIndex = seatNumber - 1;
        if (seats.get(seatIndex)) {
            seats.clear(seatIndex); // Mark the seat as unreserved (set the bit to 0)
        }
    }
}
```
``` C++ []
// time limit exceeded
class SeatManager {
    std::vector<bool> seats; // Vector to track seat reservation status
    int nextAvailableSeat; // Index of the next available seat

public:
    SeatManager(int n) {
        seats.assign(n, false); // Initialize all seats as unreserved (false)
        nextAvailableSeat = 0; // Start with the first seat
    }

    int reserve() {
        while (nextAvailableSeat < seats.size() && seats[nextAvailableSeat]) {
            nextAvailableSeat++; // Find the next available seat
        }

        if (nextAvailableSeat < seats.size()) {
            seats[nextAvailableSeat] = true; // Reserve the seat (set to true)
            return nextAvailableSeat + 1; // Seat numbers are 1-based, so add 1
        }
        return -1; // No available seats
    }

    void unreserve(int seatNumber) {
        if (seatNumber > 0 && seatNumber <= seats.size()) {
            int seatIndex = seatNumber - 1; // Convert the seat number to a 0-based index
            if (seats[seatIndex]) {
                seats[seatIndex] = false; // Mark the seat as unreserved (set to false)
                if (seatIndex < nextAvailableSeat) {
                    nextAvailableSeat = seatIndex; // Update nextAvailableSeat if needed
                }
            }
        }
    }
};

```
``` Python []
# time limit exceeded
class SeatManager:
    def __init__(self, n):
        self.seats = [0] * n  # List to track seat reservation status

    def reserve(self):
        next_available_seat = self.seats.index(0)  # Find the first unset (0) bit
        self.seats[next_available_seat] = 1  # Reserve the seat (set the bit to 1)
        return next_available_seat + 1  # Seat numbers are 1-based, so add 1

    def unreserve(self, seat_number):
        # Convert the seat number to a 0-based index
        seat_index = seat_number - 1
        if self.seats[seat_index] == 1:
            self.seats[seat_index] = 0  # Mark the seat as unreserved (set the bit to 0)

```
``` JavaScript []
// time limit exceeded
var SeatManager = function(n) {
    this.seats = new Set();

    for (let i = 1; i <= n; i++) {
        this.seats.add(i);
    }
};

SeatManager.prototype.reserve = function() {
    const nextAvailableSeat = Array.from(this.seats).sort((a, b) => a - b)[0]; // Find the smallest available seat
    this.seats.delete(nextAvailableSeat); // Reserve the seat (remove it from the set)
    return nextAvailableSeat;
};

SeatManager.prototype.unreserve = function(seatNumber) {
    this.seats.add(seatNumber); // Mark the seat as unreserved (add it back to the set)
};
```
``` C# []
public class SeatManager {
    private BitArray seats; // BitArray to track seat reservation status
    private int nextAvailableSeat; // Index of the next available seat

    public SeatManager(int n) {
        seats = new BitArray(n, false);
        nextAvailableSeat = 0; // Start with the first seat
    }

    public int Reserve() {
        while (nextAvailableSeat < seats.Length && seats[nextAvailableSeat]) {
            nextAvailableSeat++; // Find the next available seat
        }

        if (nextAvailableSeat < seats.Length) {
            seats[nextAvailableSeat] = true; // Reserve the seat (set the bit to true)
            return nextAvailableSeat + 1; // Seat numbers are 1-based
        }

        return -1; // No available seats
    }

    public void Unreserve(int seatNumber) {
        if (seatNumber > 0 && seatNumber <= seats.Length) {
            int seatIndex = seatNumber - 1; // Convert the seat number to a 0-based index
            if (seats[seatIndex]) {
                seats[seatIndex] = false; // Mark the seat as unreserved (set the bit to false)
                if (seatIndex < nextAvailableSeat) {
                    nextAvailableSeat = seatIndex; // Update nextAvailableSeat if the unreserved seat is at an earlier index
                }
            }
        }
    }
}

//--------------------------
// because of time limit exceeded, i gave you above code with little changes

public class SeatManager {
    private BitArray seats; // BitArray to track seat reservation status

    public SeatManager(int n) {
        seats = new BitArray(n);
    }

    public int Reserve() {
        int nextAvailableSeat = FindFirstUnsetBit(0); // Find the first unset (false) bit
        seats.Set(nextAvailableSeat, true); // Reserve the seat (set the bit to true)
        return nextAvailableSeat + 1; // Seat numbers are 1-based, so add 1
    }

    public void Unreserve(int seatNumber) {
        // Convert the seat number to a 0-based index
        int seatIndex = seatNumber - 1;
        if (seats.Get(seatIndex)) {
            seats.Set(seatIndex, false); // Mark the seat as unreserved (set the bit to false)
        }
    }

    private int FindFirstUnsetBit(int startIndex) {
        for (int i = startIndex; i < seats.Length; i++) {
            if (!seats.Get(i)) {
                return i;
            }
        }
        return -1; // No unset bit found, should handle this case accordingly
    }
}

```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: 
- `SeatManager(int n)`: The constructor initializes the BitSet with a size of `n`. This operation takes $$O(n)$$ time because it needs to set up the BitSet for all seats.
- `reserve()`: Finding the next available seat using `nextClearBit(0)` is an efficient operation that typically takes $$O(1)$$ time. Setting the bit to reserve the seat is also $$O(1)$$ time.
- `unreserve(int seatNumber)`: This operation involves checking and clearing a specific bit, which is also an $$O(1)$$ time operation.

Overall, the time complexity for each of the methods is $$O(1)$$, making them very efficient.

### \uD83C\uDFF9Space complexity: 
- The space complexity is determined by the BitSet used to track seat reservation status. It requires space proportional to the number of seats, which is $$O(n)$$. Therefore, the space complexity of this implementation is $$O(n)$$.


---
# 3rd Method :- TreeSet\uD83D\uDD25

## Intuition \uD83D\uDE80
The SeatManager class uses a TreeSet to maintain the available seats in a sorted order. When a seat is reserved, it removes the smallest available seat (the first element in the TreeSet). When a seat is unreserved, it adds that seat number back to the TreeSet. This ensures that the seats are always sorted in ascending order.

## Approach \uD83D\uDE80
1. **Constructor (SeatManager):**
   - The constructor takes an integer parameter `n`, representing the total number of seats.
   - It checks if `n` is a valid value (greater than 0). If `n` is not valid, it throws an `IllegalArgumentException`.
   - It initializes a TreeSet called `seats` to store available seat numbers.
   - It populates the `seats` TreeSet with seat numbers from 1 to `n`.

2. **Reserve (reserve method):**
   - The `reserve` method is called to reserve a seat.
   - If the `seats` TreeSet is empty (no available seats), it returns -1 to indicate that no seats are available.
   - Otherwise, it removes and returns the smallest available seat number by calling `pollFirst()` on the `seats` TreeSet.

3. **Unreserve (unreserve method):**
   - The `unreserve` method is called to unreserve a seat.
   - It takes a parameter `seatNumber`, representing the seat to be unreserved.
   - It checks if `seatNumber` is greater than 0 to ensure it's a valid seat number.
   - If `seatNumber` is valid, it adds the `seatNumber` back to the `seats` TreeSet, making it available again.

The TreeSet data structure ensures that seat numbers are always sorted in ascending order, making it efficient to find the smallest available seat for reservation and add seats back when unreserved.


## \u2712\uFE0FCode
``` Java []
class SeatManager {
    private TreeSet<Integer> seats;

    public SeatManager(int n) {
        if (n <= 0) {
            throw new IllegalArgumentException("Invalid value of n.");
        }

        seats = new TreeSet<>();
        for (int i = 1; i <= n; ++i) {
            seats.add(i);
        }
    }

    public int reserve() {
        if (seats.isEmpty()) {
            return -1; // No available seats.
        }
        return seats.pollFirst();
    }

    public void unreserve(int seatNumber) {
        if (seatNumber > 0) {
            seats.add(seatNumber);
        }
    }
}

```
``` C++ []

class SeatManager {
private:
    std::set<int> seats; // Use a set to store available seats.

public:
    SeatManager(int n) {
        if (n <= 0) {
            throw std::invalid_argument("Invalid value of n.");
        }

        // Initialize available seats from 1 to n.
        for (int i = 1; i <= n; ++i) {
            seats.insert(i);
        }
    }

    int reserve() {
        if (seats.empty()) {
            return -1; // No available seats.
        }
        
        int reservedSeat = *seats.begin(); // Get the smallest available seat.
        seats.erase(reservedSeat); // Remove the seat from available seats.
        return reservedSeat;
    }

    void unreserve(int seatNumber) {
        if (seatNumber > 0) {
            seats.insert(seatNumber); // Add the seat back to available seats.
        }
    }
};

```
``` Python []
class SeatManager:
    def __init__(self, n):
        if n <= 0:
            raise ValueError("Invalid value of n.")
        
        self.seats = list(range(1, n + 1)) # Initialize available seats from 1 to n.

    def reserve(self):
        if not self.seats:
            return -1  # No available seats.
        
        reserved_seat = heapq.heappop(self.seats) # Get the smallest available seat.
        return reserved_seat

    def unreserve(self, seat_number):
        if seat_number > 0:
            heapq.heappush(self.seats, seat_number) # Add the seat back to available seats.

```
``` JavaScript []
// Time Limit Exceeded
var SeatManager = function(n) {
    if (n <= 0) {
        throw new Error("Invalid value of n.");
    }

    this.seats = new Set();
    for (let i = 1; i <= n; ++i) {
        this.seats.add(i);
    }
};

SeatManager.prototype.reserve = function() {
    if (this.seats.size === 0) {
        return -1; // No available seats.
    }
    const reservedSeat = Math.min(...this.seats);
    this.seats.delete(reservedSeat);
    return reservedSeat;
};

SeatManager.prototype.unreserve = function(seatNumber) {
    if (seatNumber > 0) {
        this.seats.add(seatNumber);
    }
};
```
``` C# []
public class SeatManager {
    private SortedSet<int> seats;

    public SeatManager(int n) {
        if (n <= 0) {
            throw new ArgumentException("Invalid value of n.");
        }

        seats = new SortedSet<int>();
        for (int i = 1; i <= n; ++i) {
            seats.Add(i);
        }
    }

    public int Reserve() {
        if (seats.Count == 0) {
            return -1; // No available seats.
        }
        int reservedSeat = seats.Min;
        seats.Remove(reservedSeat);
        return reservedSeat;
    }

    public void Unreserve(int seatNumber) {
        if (seatNumber > 0) {
            seats.Add(seatNumber);
        }
    }
}
```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: 
1. Constructor (`SeatManager(int n)`):
   - Time Complexity: $$O(n * log(n))$$ due to the loop where seats are added to the TreeSet. Insertion into a TreeSet has a time complexity of $$O(log(n))$$, and the loop runs for 'n' seats.

2. `reserve()` Method:
   - Time Complexity: $$O(log(n))$$ to find and reserve the smallest available seat using `pollFirst()` from the TreeSet.

3. `unreserve(int seatNumber)` Method:
   - Time Complexity: $$O(log(n))$$ to add a seat number back to the TreeSet using `add()`.

### \uD83C\uDFF9Space complexity: 
1. Constructor (`SeatManager(int n)`):
   - Space Complexity: $$O(n)$$ for the TreeSet to store available seats. In the worst case, it will store all seat numbers from 1 to 'n'.

2. `reserve()` Method:
   - Space Complexity: $$O(1)$$ as no additional space is used.

3. `unreserve(int seatNumber)` Method:
   - Space Complexity: $$O(1)$$ as no additional space is used.

![upvote.png](./images/1.png)

# Up Vote Guys
