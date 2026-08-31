# [Go] 2 solutions with O(n log(n))

**Author:** jamieabc
**Votes:** 1
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/928862/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/928862/)

---

To get maximum profit from selling inventories, each inventory price should be as high as possible, which means selling start from largest number.

Basic idea is to pick largest number from max heap (priority queue), this guarantees maximum profit.

- Solution 1 - priority queue

  Although idea is correct, submission gets TLE, needs further optimation. Time complexity is O(n log(m)), m: size of inventory, n: orders

  ```golang
	type MaxHeap []int

	func (h MaxHeap) Len() int           { return len(h) }
	func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }
	func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
	func (h MaxHeap) Peek() int          { return h[0] }

	func (h *MaxHeap) Push(x interface{}) {
		*h = append(*h, x.(int))
	}

	func (h *MaxHeap) Pop() interface{} {
	    old := *h
	    n := len(old)
	    x := old[n-1]
	    *h = old[0 : n-1]
	    return x
    }

    func maxProfit1(inventory []int, orders int) int {
	    // sell balls with maximum length
	    h := &MaxHeap{}
	    heap.Init(h)

	    var profit int64
	    mod := int64(1e9 + 7)
	    heap.Push(h, 0) // always exist one number 0

	    for _, i := range inventory {
		    heap.Push(h, i)
        }

        for i := 0; i < orders; i++ {
		    tmp := heap.Pop(h).(int)
		    diff := tmp - h.Peek()

            for j := 0; j <= diff && tmp > 0 && i < orders; i, j = i+1, j+1 {
			    profit += int64(tmp)
			    if profit > mod {
				    profit -= mod
                }
			    tmp--
		    }
            i--

            heap.Push(h, tmp)
	    }

	    return int(profit)
    }
  ```

- Solution 2 - improve from previous

  Since first solution is not fast enough, some improvements can be made. One way to observe the problem is from sold sequence.

  If inventory array is [2, 4, 6, 8, 10] and all inventories are sold, sold sequence is as follows:

  ```
  1, 1, 1, 1, 1,
  2, 2, 2, 2, 2,
  3, 3, 3, 3,
  4, 4, 4, 4,
  5, 5, 5,
  6, 6, 6,
  7, 7,
  8, 8,
  9,
  10
  ```

  orders = k means to select largest k number from a non-decreasing sequence. e.g. same inventory and want to sold 10 inventories:

  ```
  x - not sold
  number - sold price

  x, x, x, x, x,
  x, x, x, x, x,
  x, x, x, x,
  x, x, x, x,
  x, x, 5,        - sold 1
  6, 6, 6,        - sold 3
  7, 7,           - sold 2
  8, 8,           - sold 2
  9,              - sold 1
  10              - sold 1

  total sold = 1 + 1 + 2 + 2 + 3 + 1 = 10
  maximum prices = 10 + 9 + 8 * 2 + 7 * 2 + 6 * 3 + 5
  ```

  In this calculation, it's crucial to find price `5`, it's the cut-off number that can sold wanted orders. Becase whole sequence is in descending order with some repeated pattern, once cut-off number if found, total profit can also be calculated.

  To find cut-off point, one way is to compute from largest number down to 0.
  e.g.
  sold price at 10 has 1 inventory not enough
  sold price at 9 has 1 + 1 = 2 inventories not enough
  sold price at 8 has 2 + 2 = 4 inventories not enough
  ...

   One technique to find cut-off number is using binary search. Because for each inventory, number can be sold for cut-off number can be calculated.

   e.g. inventory = [2, 4, 6, 8, 10], orders = 21

   possible range 0 ~ 10 (max in inventory), guess cut-off number 5 (not sold when remaining is 5):

   For inventory with 10 remaining, it can sold up to 5 inventories (10, 9, 8, 7, 6) = 10 - 5

   ```
   x - not sold

   x, x, x, x, x,
   x, x, x, x, x,
   x, x, x, x,
   x, x, x, x,
   x, x, x,
   6, x, x,
   7, x,
   8, x,
   9,
   10
   ```

   For inventory with 8 remaing, it can sold up to 3 inventories (8, 7, 6) = 8 - 5

   ```
   x, x, x, x, x,
   x, x, x, x, x,
   x, x, x, x,
   x, x, x, x,
   x, x, x,
   6, 6, x,
   7, 7,
   8, 8,
   9,
   10
   ```

   So,  for each inventory to sold at some price, number to sold is `inventory count - guess number`.

   When cut-off number is found, need to be careful calculating remaining sold, because there might need additional sold.

   e.g. inventory = [2, 4, 6, 8, 10], orders = 10

    ```
    x - not sold
    number- sold price

    x, x, x, x, x,
    x, x, x, x, x,
    x, x, x, x,
    x, x, x, x,
    x, x, 5,        - sold 1
    6, 6, 6,        - sold 3
    7, 7,           - sold 2
    8, 8,           - sold 2
    9,              - sold 1
    10              - sold 1
    ```

    cut-off number is 6, means all invetory will be sold for prices >= 6. But there still need to sold additional 1 inventory with price 5. The reason is because for prices >= 6, there can sold 1 + 1 + 2 + 2 + + 3 = 9, which is not enough for 10.

    Knowing this, maximum profit can be calculated. Time complexity is O(n log(m)), n: inventory size, m: maximum value in invetory list

    ```golang
    func maxProfit(inventory []int, orders int) int {
	    sort.Slice(inventory, func(i, j int) bool {
		    return inventory[i] > inventory[j]
        })

	    bound := binarySearch(inventory, orders) // not including bound itself

	    var profit int64
	    mod := int64(1e9 + 7)

	    // add profit to lower bound
	    for idx := 0; idx < len(inventory) && inventory[idx] > bound; idx++ {
		    size := inventory[idx] - bound
		    profit += int64(inventory[idx]+bound+1) * int64(size) / int64(2) % mod
		    profit = profit % mod
        }

	    count := sumLarger(inventory, bound)
	    if count < orders {
		    profit += int64(bound) * int64(orders-count) % mod
        }

	    return int(profit % mod)
    }

    func sumLarger(inv []int, criteria int) int {
	    var sum int

	    for _, i := range inv {
		    sum += max(0, i-criteria)
        }

	    return sum
    }

    func binarySearch(inv []int, orders int) int {
	    var largest int
	    for _, i := range inv {
		    largest = max(largest, i)
        }

	    var ans int

	    for low, high := 0, largest; low <= high; {
		    mid := low + (high-low)>>1
		    count := sumLarger(inv, mid)

            if count == orders {
			    return mid
		    } else if count > orders {
			    low = mid + 1
		    } else {
			    ans = mid
			    high = mid - 1
		    }
        }

	    return ans
    }
    ```