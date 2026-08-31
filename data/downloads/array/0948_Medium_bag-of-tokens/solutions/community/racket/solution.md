# 👉👈 java, c, javascript, python, go, ruby, php, racket

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/4822110/](https://leetcode.com/problems/bag-of-tokens/solutions/4822110/)

---

up vote \uD83D\uDC4D
have a nice day

``` java []
class Solution {
    public int bagOfTokensScore(int[] tokens, int power) {
        int score = 0;      
        Arrays.sort(tokens);

        int left = 0;
        int right = tokens.length - 1;

        while (left <= right) {
            if (tokens[left] <= power) {
                power = power - tokens[left];                
                left++;
                score++;
            } else if (score > 0 && left < right) {
                power = power + tokens[right];
                right--;
                score--;
            } else {
                return score;
            }

        }

        return score;
    }
}
```
``` c []
int comp(const void * a, const void * b) {
  return *(int*)a - *(int*)b;
}

int bagOfTokensScore(int* tokens, int tokensSize, int power) {
    int score = 0;
    int left = 0;
    int right = tokensSize - 1;

    qsort(tokens, tokensSize, sizeof(int), comp);

    while (left <= right) {
        if (tokens[left] <= power) {
            power -= tokens[left];
            left++;
            score++;
        } else if (score > 0 && left < right) {
            power += tokens[right];
            right--;
            score--;
        } else {
            break;
        }
    }

    return score;
}
```
``` javascript []
var bagOfTokensScore = function(tokens, power) {
    var score = 0;
    var left = 0;
    var right = tokens.length - 1;

    tokens.sort((a, b) => a - b);

    while (left <= right) {
        if (tokens[left] <= power) {
            score++;
            power -= tokens[left];
            left++;
        } else if (score > 0 && left < right) {
            power += tokens[right];
            score--;
            right--;
        } else {
            return score;
        }
    }

    return score;
};
```
``` python []
class Solution(object):
    def bagOfTokensScore(self, tokens, power):
        score = 0
        left = 0
        right = len(tokens) - 1

        tokens.sort()

        while left <= right:
            if tokens[left] <= power:
                power -= tokens[left]
                left += 1
                score += 1
            elif score > 0 and left < right:
                power += tokens[right]
                right -= 1
                score -= 1
            else:
                break
        return score
```
``` golang []
func bagOfTokensScore(tokens []int, power int) int {
    score := 0
    left := 0
    right := len(tokens) - 1

    slices.Sort(tokens)

    for left <= right {
        if tokens[left] <= power {
            power -= tokens[left]
            left++
            score++
        } else if score > 0 && left < right {
            power += tokens[right]
            right--
            score--
        } else {
            break
        }
    }

    return score
}
```
``` ruby []
def bag_of_tokens_score(tokens, power)
    score = 0
    left = 0
    right = tokens.length - 1

    tokens.sort!

    while left <= right
        if power >= tokens[left]
            power -= tokens[left]
            left += 1
            score += 1
        elsif score > 0 and left < right
            power = power + tokens[right]
            right -= 1
            score -= 1
        else 
            break
        end

    end

    score
end
```
``` php []
class Solution {
    function bagOfTokensScore($tokens, $power) {
        $score = 0;
        $left = 0;
        $right = count($tokens) - 1;

        sort($tokens);

        while ($left <= $right) {
            if ($tokens[$left] <= $power) {
                $power -= $tokens[$left];
                $left++;
                $score++;
            } else if ($score > 0 && $left < $right) {
                $power += $tokens[$right];
                $score--;
                $right--;
            } else {
                break;
            }
        }

        return $score;
    }
}
```
``` racket []
(define (bag-of-tokens-score tokens power)
  (let loop ([tokens (list->vector (sort tokens <))]
             [left 0]
             [right (sub1 (length tokens))]
             [power power]
             [score 0])
    (cond [(> left right) score]
          [(<= (vector-ref tokens left) power) (loop tokens (add1 left) right (- power (vector-ref tokens left)) (add1 score))]
          [(and (> score 0) (< left right)) (loop tokens left (sub1 right) (+ power (vector-ref tokens right)) (sub1 score))]
          [else score])))
```