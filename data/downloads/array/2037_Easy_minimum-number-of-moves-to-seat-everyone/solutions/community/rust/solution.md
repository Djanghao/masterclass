# ✅✅🔥🔥Two Approaches :- Sorting  O(n logn) and counting Sort O(n).

**Author:** sidharthjain321
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5309686/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5309686/)

---

# There are two approaches to solve this problem :-
- Using Sorting
- Using counting sort
---
# 1. *Sorting Approach :-*

---


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We want to move the students to the seats Locations which are present in the seats vector. We want to move the students in such a way that the total number of moves to move all the students to the required seats must be minimum possible moves. Each move means incrementing or decrementing the position of current student by 1. Suppose there are 2 students and 2 seats.
```
seats = {5,9}
students = {1,7}

/* we want to move the students to the seat number 5 and 9, 
   which student to move to which side ??
*/
/*
    The first thing comes in mind that whichever student is nearest to the
seat should be moved to the seat. 
This means for seat number 5 :-
- student at seat number = 1 is 4 moves away from seat number 5.
- student at seat number = 7 is 2 moves away from seat number 5.

    int number of moves = 0
    - Let the student at seat number 7 be moved to seat number 5.
        number of moves += 2.
        Now the student 1 must be moved to the seat number 9, which is 8 moves away.
        number of moves = 2 + 8 = 10.


        number of moves = 0
    - Let the student at seat number 7 be moved to seat number 9, which is  moves away.
        number of moves += 2
        Now the student 1 must be moved to the seat number 5, which is 4 moves away.
        number of moves = 2 + 4 = 6.

So which is giving the minimum number of moves.
The second way.
It means select the student from the students vector which is at lowest
seat position, then select the lowest seat position from seats vector and
then move the student to that seat and then move forward for the other students.
*/
```

# Approach
<!-- Describe your approach to solving the problem. -->
- Sort both of the vector in non-decreasing order.
- Initialise ans , `int ans = 0;`
- Start a for loop with seat = 0 , student = 0.
```
for(int seat = 0, student = 0; seat < seats.size() && student < students.size(); seat++, student++) {
}
```
- select the seat and store its seatPosition in `seatPosition = seats[seat]` and select the student seat position in `studentPosition = students[student]`
```
int seatPosition = seats[seat];
int studentPosition = students[student];
```
- calculate the absolute difference of both.
- add it to the `ans`.
```
ans += abs(seatPosition - studentPosition);
```
- Out of the loop.
- return `ans`.
```
return ans;
```


# Complexity
- Time complexity: $$O(nlogn + nlogn + n)$$ = $$O(nlogn)$$ , two times sort and one for loop iterating n times, where n = seats.size() or students.size().
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(logn)$$ because memory used while using inbuilt sorting function.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
```C++ []
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
        sort(seats.begin(),seats.end());
        sort(students.begin(),students.end());

        int n = seats.size();
        int ans = 0;
        for(int seat = 0, student = 0; seat < seats.size() && student < students.size(); seat++, student++) {
            int seatPosition = seats[seat];
            int studentPosition = students[student];
            ans += abs(seatPosition - studentPosition);
        }
        return ans;
    }
};
```
```python3 []
class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()

        ans = 0
        for seat, student in zip(seats, students):
            ans += abs(seat - student)
        return ans

```
``` Java []
class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);

        int ans = 0;
        for (int i = 0; i < seats.length; i++) {
            ans += Math.abs(seats[i] - students[i]);
        }
        return ans;
    }
}

```
```ruby []
# @param {Integer[]} seats
# @param {Integer[]} students
# @return {Integer}
def min_moves_to_seat(seats, students)
    seats.sort!
    students.sort!
    ans = 0
    seats.each_with_index do |seat, i|
        ans += (seat - students[i]).abs
        end
    ans
end
```


``` JavaScript []
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    let ans = 0;
    for (let i = 0; i < seats.length; i++) {
        ans += Math.abs(seats[i] - students[i]);
    }
    return ans;
};

```
```Rust []
impl Solution {
    pub fn min_moves_to_seat(seats: Vec<i32>, students: Vec<i32>) -> i32 {
        let mut seats = seats.clone();
        let mut students = students.clone();
        seats.sort();
        students.sort();

        let mut ans = 0;
        for i in 0..seats.len() {
            ans += (seats[i] - students[i]).abs();
        }
        ans
    }
}

```
``` Go []
func minMovesToSeat(seats []int, students []int) int {
	sort.Ints(seats)
	sort.Ints(students)

	ans := 0
	for i := 0; i < len(seats); i++ {
		ans += int(math.Abs(float64(seats[i] - students[i])))
	}
	return ans
}

```
[Instagram](https://www.instagram.com/iamsidharthaa__/)
[LinkedIn](https://www.linkedin.com/in/sidharth-jain-36b542133)
**If you find this solution helpful, consider giving it an upvote! Your support is appreciated. Keep coding, stay healthy, and may your programming endeavors be both rewarding and enjoyable!**

---
# 2. *Using Counting Sort Approach :-*
---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have to place the students to the first seat which is non occupied in the seat array. So we will track the count of each seat location and also track the count of students initially positioned at their given seats.
we will check each seat, which is non occupied, after finding the first non-occupied seat, we will search the student which is not moved to the reqired seat, after finding the student we will move it to the current seat and add the moves to the answer and also if the current seat positions are all filled then we will go to the next seat.

# Approach
<!-- Describe your approach to solving the problem. -->
<!-- Discussed in the comments in the code. -->

**The problem requires finding the minimum number of moves to seat all students in the given seats such that the moves are minimized. The given constraints specify that the seat positions and student positions range from 1 to 100.**


### 1. Initialization:

- Create two vectors, seatsLocation and studentsFreq, to store the frequency of each seat and student position, respectively.
- The size of these vectors is determined by the maximum element in the seats and students vectors plus one. This ensures that the indices of the vectors cover all possible positions from 0 to the maximum seat/student position.

### 2. Populate Frequency Vectors:

- Iterate over the seats array and increment the corresponding index in the seatsLocation vector.
- Similarly, iterate over the students array and increment the corresponding index in the studentsFreq vector.

### 3. Finding Minimum Moves:

- Initialize studentPosition to 1 since the positions start from 1.
- Initialize ans to 0 to store the total minimum moves.
- Iterate over the seatsLocation vector to find seats that need to be filled.
- For each seat that has available positions (seatsLocation[seat] > 0), find the nearest student who is not already seated by checking the studentsFreq vector.
- Calculate the moves required to seat the student at the current seat position and update ans.
- Decrease the counts in both seatsLocation and studentsFreq to indicate that one seat is filled and one student is seated.
- Move to the next seat position if the current seat is completely filled (seatsLocation[seat] == 0).

### 4. Return the Result:

- After all seats are filled, return the total number of moves stored in ans.

# Complexity
- Time complexity: $$O(n + n )$$ = $$O(n)$$ , where n = seats.size() or students.size().
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m1 + m2)$$ , where m1 = max seat position in the seats vector and where m2 = max seat position of student in the students vector. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++ []
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
        vector<int> seatsLocation(*max_element(seats.begin(),seats.end()) + 1, 0); // to store the seats available and store its frequency.
        vector<int> studentsFreq(*max_element(students.begin(),students.end()) + 1, 0); // to count the number of students which are initially present at the alloted seats initially.

        for(auto loc: seats) seatsLocation[loc]++; // filling the seatsLocation vector
        for(auto std: students) studentsFreq[std]++; // filling the students initially alloted seats
        int seatsLocationSize = seatsLocation.size(); // size of the seatsLocation vector
        int studentsFrequencySize = studentsFreq.size(); // size of the studentsFreq vector
        int studentPosition = 1; // we know that the students initial position can be from 1 to 100. as given in the constraints :- 1 <= seats[i], students[j] <= 100
        int ans = 0; // to store the minimum number of moves to move each student to the given seat location 
        for(int seat = 1; seat < seatsLocationSize; ) { // seats are available from 1 to 100 both inclusive as give int the constraints :- 1 <= seats[i], students[j] <= 100
            if(seatsLocation[seat] == 0) { // if there is not any seat location in the seats vector then we can move forward
                seat++; // incrementing the seat as the current seat is not available in the seats vector
                continue; // skipping the further process
            }

            // now we have reached a seat which is present in the seats vector, now we have to find the student which is present in the students vector which is currently not seated at the required seat.
            while(studentPosition < studentsFrequencySize && studentsFreq[studentPosition] == 0) studentPosition++; 
            // we have reached at the student which is currently at 'studentPosition', we have to move the student to the 'seat' and the number of moves for moving the student to seat from studentPosition = absolute value of (studentPosition - seat).
            ans += abs(studentPosition - seat); // adding the number of moves in the answer
            seatsLocation[seat]--; // now one of the location in the seats vector is filled, so we are decrementing the available seats which can be filled in the future by the students.
            studentsFreq[studentPosition]--; // also one student is currently moved to the required seat location, so we are decrementing the studentsFreq which are currently present at the studentLocation seat
            if(seatsLocation[seat] == 0) { // if current seat has no more positions for the seating of students, then we are incrementing the seat to go to the next available seat which is present in the seats vector.
                seat++; // incrementing the seat by 1.
            } 
        }
        return ans; // returning the answer
    }
};
```
```Java []
class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        int[] seatsLocation = new int[Arrays.stream(seats).max().getAsInt() + 1];
        int[] studentsFreq = new int[Arrays.stream(students).max().getAsInt() + 1];

        for (int loc : seats) seatsLocation[loc]++;
        for (int std : students) studentsFreq[std]++;

        int seatsLocationSize = seatsLocation.length;
        int studentsFrequencySize = studentsFreq.length;
        int studentPosition = 1;
        int ans = 0;

        for (int seat = 1; seat < seatsLocationSize; ) {
            if (seatsLocation[seat] == 0) {
                seat++;
                continue;
            }

            while (studentPosition < studentsFrequencySize && studentsFreq[studentPosition] == 0) {
                studentPosition++;
            }

            ans += Math.abs(studentPosition - seat);
            seatsLocation[seat]--;
            studentsFreq[studentPosition]--;

            if (seatsLocation[seat] == 0) {
                seat++;
            }
        }
        return ans;
    }
}

```
```Python []
class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats_location = [0] * (max(seats) + 1)
        students_freq = [0] * (max(students) + 1)

        for loc in seats:
            seats_location[loc] += 1
        for std in students:
            students_freq[std] += 1

        seats_location_size = len(seats_location)
        students_frequency_size = len(students_freq)
        student_position = 1
        ans = 0

        seat = 1
        while seat < seats_location_size:
            if seats_location[seat] == 0:
                seat += 1
                continue

            while student_position < students_frequency_size and students_freq[student_position] == 0:
                student_position += 1

            ans += abs(student_position - seat)
            seats_location[seat] -= 1
            students_freq[student_position] -= 1

            if seats_location[seat] == 0:
                seat += 1

        return ans

```
``` Ruby []
# @param {Integer[]} seats
# @param {Integer[]} students
# @return {Integer}

  def min_moves_to_seat(seats, students)
    seats_location = Array.new(seats.max + 1, 0)
    students_freq = Array.new(students.max + 1, 0)

    seats.each { |loc| seats_location[loc] += 1 }
    students.each { |std| students_freq[std] += 1 }

    seats_location_size = seats_location.size
    students_frequency_size = students_freq.size
    student_position = 1
    ans = 0

    seat = 1
    while seat < seats_location_size
      if seats_location[seat] == 0
        seat += 1
        next
      end

      while student_position < students_frequency_size && students_freq[student_position] == 0
        student_position += 1
      end

      ans += (student_position - seat).abs
      seats_location[seat] -= 1
      students_freq[student_position] -= 1

      seat += 1 if seats_location[seat] == 0
    end

    ans
  end


```
```JavaScript []
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let seatsLocation = Array(Math.max(...seats) + 1).fill(0);
    let studentsFreq = Array(Math.max(...students) + 1).fill(0);

    seats.forEach(loc => seatsLocation[loc]++);
    students.forEach(std => studentsFreq[std]++);

    let seatsLocationSize = seatsLocation.length;
    let studentsFrequencySize = studentsFreq.length;
    let studentPosition = 1;
    let ans = 0;

    for (let seat = 1; seat < seatsLocationSize; ) {
        if (seatsLocation[seat] === 0) {
            seat++;
            continue;
        }

        while (studentPosition < studentsFrequencySize && studentsFreq[studentPosition] === 0) {
            studentPosition++;
        }

        ans += Math.abs(studentPosition - seat);
        seatsLocation[seat]--;
        studentsFreq[studentPosition]--;

        if (seatsLocation[seat] === 0) {
            seat++;
        }
    }
    return ans;
};
```
```Rust []
impl Solution {
    pub fn min_moves_to_seat(seats: Vec<i32>, students: Vec<i32>) -> i32 {
        let mut seats_location = vec![0; *seats.iter().max().unwrap() as usize + 1];
        let mut students_freq = vec![0; *students.iter().max().unwrap() as usize + 1];

        for &loc in &seats {
            seats_location[loc as usize] += 1;
        }
        for &std in &students {
            students_freq[std as usize] += 1;
        }

        let seats_location_size = seats_location.len();
        let students_frequency_size = students_freq.len();
        let mut student_position = 1;
        let mut ans = 0;

        let mut seat = 1;
        while seat < seats_location_size {
            if seats_location[seat] == 0 {
                seat += 1;
                continue;
            }

            while student_position < students_frequency_size && students_freq[student_position] == 0 {
                student_position += 1;
            }

            ans += (student_position as i32 - seat as i32).abs();
            seats_location[seat] -= 1;
            students_freq[student_position] -= 1;

            if seats_location[seat] == 0 {
                seat += 1;
            }
        }
        ans
    }
}
```
```Go []
func minMovesToSeat(seats []int, students []int) int {
	seatsLocation := make([]int, max(seats)+1)
	studentsFreq := make([]int, max(students)+1)

	for _, loc := range seats {
		seatsLocation[loc]++
	}
	for _, std := range students {
		studentsFreq[std]++
	}

	seatsLocationSize := len(seatsLocation)
	studentsFrequencySize := len(studentsFreq)
	studentPosition := 1
	ans := 0

	for seat := 1; seat < seatsLocationSize; {
		if seatsLocation[seat] == 0 {
			seat++
			continue
		}

		for studentPosition < studentsFrequencySize && studentsFreq[studentPosition] == 0 {
			studentPosition++
		}

		ans += int(math.Abs(float64(studentPosition - seat)))
		seatsLocation[seat]--
		studentsFreq[studentPosition]--

		if seatsLocation[seat] == 0 {
			seat++
		}
	}
	return ans
}

func max(arr []int) int {
	m := arr[0]
	for _, v := range arr {
		if v > m {
			m = v
		}
	}
	return m
}

```

![upvote.jpeg](./images/1.jpeg)
![upvote.jpeg](./images/1.jpeg)


[Instagram](https://www.instagram.com/iamsidharthaa__/)
[LinkedIn](https://www.linkedin.com/in/sidharth-jain-36b542133)
**If you find this solution helpful, consider giving it an upvote! Your support is appreciated. Keep coding, stay healthy, and may your programming endeavors be both rewarding and enjoyable!**