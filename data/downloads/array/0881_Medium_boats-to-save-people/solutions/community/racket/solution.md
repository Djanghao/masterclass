# simple algorithm

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/5112633/](https://leetcode.com/problems/boats-to-save-people/solutions/5112633/)

---

# Code
``` java []
class Solution {
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        int left = 0;
        int right = people.length - 1;
        int count = 0;
        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                left++;
            }
            right--;
            count++;
        }

        return count;
    }
}
```
``` c []
int compare( const void* a, const void* b) {
   int int_a = * ( (int*) a );
   int int_b = * ( (int*) b );

   return (int_a > int_b) - (int_a < int_b);
}

int numRescueBoats(int* people, int peopleSize, int limit) {
    qsort(people, peopleSize, sizeof(int), compare);

    int count = 0;
    int left = 0;
    int right = peopleSize - 1;

    while (left <= right) {
        if (people[left] + people[right] <= limit) left++;
        right--;
        count++;
    }

    return count;
}
```
``` javascript []
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    var count = 0;
    var left = 0;
    var right = people.length - 1;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        count++;
        
    }

    return count;
};
```
``` php []
class Solution {
    function numRescueBoats($people, $limit) {
        sort($people);
        $count = 0;
        $left = 0;
        $right = count($people) - 1;

        while ($left <= $right) {
            if ($people[$left] + $people[$right] <= $limit) {
                $left++;
            }
            $right--;
            $count++;
        }

        return $count;
    }
}
```
``` golang []
func numRescueBoats(people []int, limit int) int {
    sort.Ints(people)
    left := 0
    right := len(people) - 1
    count := 0

    for left <= right {
        if people[left] + people[right] <= limit {
            left++
        }
        right--
        count++
    }

    return count
}
```
``` python []
class Solution(object):
    def numRescueBoats(self, people, limit):
        people = sorted(people)
        count = 0
        left = 0
        right = len(people) - 1
        while left <= right:
            if people[left] + people[right] <= limit:
                left += 1
            right -= 1
            count += 1
        return count
```
``` ruby []
def num_rescue_boats(people, limit)
    people.sort!
    left = 0
    right = people.size - 1
    count = 0

    while left <= right
        left += 1 if people[left] + people[right] <= limit
        right -= 1
        count += 1
    end

    return count
end
```
``` racket []
(define (num-rescue-boats people limit)
    (let loop ([people (list->vector (sort people <))]
               [left 0]
               [right (sub1 (length people))])
        (cond [(> left right) 0]
              [(<= (+ (vector-ref people left) (vector-ref people right)) limit) (add1 (loop people (add1 left) (sub1 right)))]
              [else (add1 (loop people left (sub1 right)))])))
```