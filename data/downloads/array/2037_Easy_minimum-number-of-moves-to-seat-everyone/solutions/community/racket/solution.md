# ✅ 2 approaches

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5318947/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5318947/)

---

# Approach 1: Sorting

We need to make sure that the difference between `seats[i]` and `studetns[i]` is minimal. To do this, we sort both arrays.

# Code
``` java []
class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);
        int count = 0;
        for (int i = 0; i < seats.length; i++) {
            count += Math.abs(seats[i] - students[i]);
        }

        return count;
    }
}
```
``` c []
int cmp(const void* a, const void* b) {
   return *(int*)a - *(int*)b;
}

int minMovesToSeat(int* seats, int seatsSize, int* students, int studentsSize) {
    qsort(seats, seatsSize, sizeof(int), cmp);
    qsort(students, studentsSize, sizeof(int), cmp);

    int moves = 0;
    for (int i = 0; i < seatsSize; i++) {
        moves += abs(seats[i] - students[i]);
    }

    return moves;
}
```
``` cpp []
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
        sort(seats.begin(), seats.end());
        sort(students.begin(), students.end());

        int moves = 0;
        for (int i = 0; i < seats.size(); i++) {
            moves += abs(seats[i] - students[i]);
        }

        return moves;
    }
};
```
``` python []
class Solution(object):
    def minMovesToSeat(self, seats, students):
        seats = sorted(seats)
        students = sorted(students)

        moves = 0
        for i in range(len(seats)):
            moves += abs(seats[i] - students[i])
        return moves
        
```
``` javascript []
var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    count = 0;
    for (var i = 0; i < seats.length; i++) {
        count += Math.abs(seats[i] - students[i]);
    }

    return count;
};
```
``` php []
class Solution {
    function minMovesToSeat($seats, $students) {
        sort($seats);
        sort($students);

        $moves = 0;
        for ($i = 0; $i < count($seats); $i++) {
            $moves += abs($seats[$i] - $students[$i]);
        }

        return $moves;
    }
}
```
``` golang []
func minMovesToSeat(seats []int, students []int) int {
    sort.Ints(seats)
    sort.Ints(students)

    moves := 0

    for i := 0; i < len(seats); i++ {
        moves += int(math.Abs(float64(seats[i] - students[i])))
    }

    return moves
}
```
``` ruby []
def min_moves_to_seat(seats, students)
    seats.sort!()
    students.sort!()

    rs = 0
    seats.each_index do |i|
        rs += (seats[i] - students[i]).abs
    end

    return rs
end
```
``` kotlin []
class Solution {
    fun minMovesToSeat(seats: IntArray, students: IntArray): Int {
        seats.sort()
        students.sort()
        var rs = 0

        for (i in 0 until seats.size) {
            rs += abs(seats[i] - students[i])
        }

        return rs
    }
}
```
``` racket []
(define (min-moves-to-seat seats students)
    (foldl (lambda (a b acc) (+ acc (abs (- a b)))) 0 
            (sort seats <)
            (sort students <)))
```

# Approach 2: Counting sorting

Instead of sorting, we use counting sort that has $O(n)$ complexity. We count the amount of unbalanced seats using  a ```diff``` array, and next we move the difference to empty slots in the ```diff``` array.

``` java []
class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        int[] diff = new int[101];
        for (int val : seats) {
            diff[val]++;
        }

        for (int val : students) {
            diff[val]--;
        }

        int moves = 0;
        int unmatched = 0;
        for (int i = 0; i < diff.length; i++) {
            moves += Math.abs(unmatched);
            unmatched += diff[i];
        }

        return moves;
    }
}
```
``` c []
int minMovesToSeat(int* seats, int seatsSize, int* students, int studentsSize) {
    int diff[101] = {0};
    for (int i = 0; i < seatsSize; i++) {
        diff[seats[i]]++;
        diff[students[i]]--;
    }

    int unmatched = 0;
    int moves = 0;
    for (int i = 0; i < 101; i++) {
        if (unmatched != 0 || diff[i] != 0) {
            moves += abs(unmatched);
            unmatched += diff[i];
        }
    }

    return moves;
}
```
``` cpp []
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
        int counter[101] = {0};
        for (int i = 0; i < seats.size(); i++) {
            counter[seats[i]]++;
            counter[students[i]]--;
        }

        int unmached = 0;
        int moves = 0;
        for (int i = 0; i < 101; i++) {
            unmached += counter[i];
            moves += abs(unmached);
        }

        return moves;
    }
};
```
``` python []
class Solution(object):
    def minMovesToSeat(self, seats, students):
        diff = [0] * 101
        for val in seats:
            diff[val] += 1   
        for val in students: 
            diff[val] -= 1

        moves = 0
        unchanged = 0
        for val in diff:
            moves += abs(unchanged)
            unchanged += val

        return moves     
```
``` javascript []
var minMovesToSeat = function(seats, students) {
    var diff = Array(101).fill(0);
    for (var i = 0; i < seats.length; i++) {
        diff[seats[i]]--;
        diff[students[i]]++;
    }

    var unmached = 0
    var moves = 0;
    for (var i = 0; i < diff.length; i++) {
        if (unmached != 0 || diff[i] != 0) {
            unmached += diff[i];
            moves += Math.abs(unmached);
        }
    }

    return moves;
};
```
``` php []
class Solution {
    function minMovesToSeat($seats, $students) {
        $diff = array_fill(0, 100, 0);
        for($i = 0; $i < count($seats); $i++) {
            $diff[$seats[$i]]--;
            $diff[$students[$i]]++;
        }

        $unmached = 0;
        $moves = 0;

        for ($i = 0; $i < count($diff); $i++) {
            if ($unmached != 0 || $diff[$i] != 0) {
                $moves += abs($unmached);                
                $unmached += $diff[$i];
            }
        }

        return $moves;
    }
}
```
``` golang []
func abs(n int) int {
	y := n >> 63
	return (n ^ y) - y
}

func minMovesToSeat(seats []int, students []int) int {
    diff := make([]int, 101)
    for i := 0; i < len(seats); i++ {
        diff[seats[i]]--
        diff[students[i]]++
    }

    moves := 0
    unmatched := 0
    for i := 0; i < len(diff); i++ {
        moves += abs(unmatched)
        unmatched += diff[i]
    }

    return moves
}
```
``` ruby []
def min_moves_to_seat(seats, students)
    counter = Array.new(101, 0)
    for i in 0..seats.length - 1
        counter[seats[i]] += 1
        counter[students[i]] -= 1
    end

    moved = 0
    untached = 0
    for i in 0..100
        untached += counter[i]
        moved += untached.abs
    end

    moved
end
```
``` kotlin []
class Solution {
    fun minMovesToSeat(seats: IntArray, students: IntArray): Int {
        var counter = IntArray(101) { 0 }
        for (i in 0 until seats.size) {
            counter[seats[i]]++
            counter[students[i]]--
        }

        var unmatched = 0
        var moves = 0

        for (i in 0..100) {
            unmatched += counter[i]
            moves += abs(unmatched)
        }

        return moves
    }
}
```
``` racket []
(define (min-moves-to-seat seats students)
    (define (count seats students [vec (make-vector 101 0)])
        (if (null? seats)
            vec
            (let ([head_seats (car seats)]
                  [head_students (car students)])
                (begin
                    (vector-set! vec head_seats (add1 (vector-ref vec head_seats)))
                    (vector-set! vec head_students (sub1 (vector-ref vec head_students)))
                    (count (cdr seats) (cdr students) vec)))))
    (cdr (foldl
        (lambda (item acc) 
            (let* ([untached (+ (car acc) item)]
                   [moved (+ (abs untached) (cdr acc))])
              (cons untached moved)))
        (cons 0 0) 
        (vector->list (count seats students)))))
```