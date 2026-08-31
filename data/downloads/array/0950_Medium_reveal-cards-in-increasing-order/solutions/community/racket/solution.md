# Reverse queue simulation. short and simple code

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5004323/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5004323/)

---

The idea is to simulate que but in backward order.

1. Sort the array
2. Put the last element of the sorted array in `que`
3. Start backward loop over `deck` from the position `deck.length - 2` (since we put in the last element already)
3.1. `pop()` the last elememnt from the que and put it at the beginning of the `que`
3.2. put `deck[i]` at the begenning of the `que`
3.3. repeat the loop until the beginning of the `deck`
4. return `que`

# Code
The reverse simulation approach gives us a very simple code
``` python []
class Solution(object):
    def deckRevealedIncreasing(self, deck):
        deck = sorted(deck)
        que = [deck.pop()]

        for val in reversed(deck):
            que.insert(0, que.pop())
            que.insert(0, val)

        return que
```
``` java []
class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        if (deck.length < 2) return deck;
        Arrays.sort(deck);

        Deque<Integer> que = new LinkedList<>();
        que.add(deck[deck.length - 1]);

        for (int i = deck.length - 2; i >= 0; i--) {
            que.addFirst(que.pollLast());
            que.addFirst(deck[i]);           
        }

        Iterator<Integer> it = que.iterator();
        for (int i = 0; it.hasNext(); i++) {
            deck[i] = it.next();
        }

        return deck;
    }
}
```
``` javascript []
var deckRevealedIncreasing = function(deck) {
    if (deck.length < 2) return deck;
    deck.sort((a, b) => a - b);
    var que = [deck[deck.length - 1]];

    for (var i = deck.length - 2; i >= 0; i--) {
        que.unshift(que.pop());
        que.unshift(deck[i]);
    }

    return que;
};
```
``` php []
class Solution {
    function deckRevealedIncreasing($deck) {
        sort($deck);
        $que = [end($deck)];

        for ($i = count($deck) - 2; $i >= 0; $i--) {
            array_unshift($que, $deck[$i], array_pop($que));
        }

        return $que;
    }
}
```
``` golang []
func deckRevealedIncreasing(deck []int) []int {
    sort.Ints(deck)
    que := []int{deck[len(deck) - 1]}

    for i := len(deck) - 2; i >= 0; i-- {
        que = append([]int{que[len(que) - 1]}, que[:len(que) - 1]...)
        que = append([]int{deck[i]}, que...)
    }

    return que
}
```
``` ruby []
def deck_revealed_increasing(deck)
    que = [deck.sort!.pop()]

    deck.reverse_each do |val|
        que.unshift(val, que.pop())
    end

    return que
end
```
``` racket []
(define (deck-revealed-increasing deck)
  (let* ([deck (sort deck >)])
    (let loop ([deck (cdr deck)]
               [que (list (car deck))])
      (cond [(null? deck) que]
            [else (loop (cdr deck) (cons (car deck) (cons (car (take-right que 1)) (drop-right que 1))))]))))
```
