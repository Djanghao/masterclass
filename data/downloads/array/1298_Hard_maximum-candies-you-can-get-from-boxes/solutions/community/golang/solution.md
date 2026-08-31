# Golang BFS / HashTable - 100% faster + 8.0MB

**Author:** netr
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/2503890/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/2503890/)

---

Not many golang solutions posted on this site, so I wanted to show my solution. It's getting 100% faster @ 120ms. I'm still learning and getting better at these problems, but this is a BFS using 2 hash maps.

I'm using a `possession` and a `opened` hash map to keep track of the search. `Possession` is populated from the initial boxes and any contained boxes found while searching. `Opened` is only set when you pop a box off the queue.

The way I handled the keys was fairly straightforward, but relies on the hash maps:

If the box hasn't been opened yet ( status == 0 ), then set the status to 1 (Note: this makes the contained boxes being found able to be opened immediately). 

Keys make use of the` possession` and `opened` hashmaps to decide if it should pop the box into the queue. Sometimes we'll get a contained box that has no key first and vice versa. This covers both cases.

Hope this helps.

```
func maxCandies(status []int, candies []int, keys [][]int, containedBoxes [][]int, initialBoxes []int) int {
    queue := list.New()
    possession := make(map[int]bool, len(status))
    opened := make(map[int]bool, len(status))
    for _, box := range initialBoxes {
        queue.PushBack(box)
        possession[box] = true
    }
    
    totalCandies := 0
    for queue.Len() >= 1 {
        pop := queue.Front()
        popVal := pop.Value.(int)
        queue.Remove(pop)
        
        if status[popVal] == 1 {
            opened[popVal] = true
            
            for i := 0; i < len(keys[popVal]); i++ {
                key := keys[popVal][i]
                if status[key] == 0 {
                    status[key] = 1

                    if !opened[key] && possession[key] {
                        queue.PushBack(key)
                    }
                }
            }
            
            for i := 0; i < len(containedBoxes[popVal]); i++ {
                box := containedBoxes[popVal][i]
                possession[box] = true
                if !opened[box] && status[box] == 1 {
                    queue.PushBack(box)
                }
            }
        
        }
    }
    
    for i := 0; i < len(status); i++ {
        if possession[i] && status[i] == 1 {
            totalCandies += candies[i]
        }
    }
    
    return totalCandies
}
```