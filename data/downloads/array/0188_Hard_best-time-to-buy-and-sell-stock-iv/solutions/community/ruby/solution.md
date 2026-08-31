# My journey from DP O(kn) to Stack+Heap O(n+klgn)

**Author:** NikkiNicholas
**Votes:** 12
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/54147/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/54147/)

---

When I was solving Best Time to Buy and Sell Stock, I happened to know Kadane's Algorithm. On its [wiki page](https://www.wikiwand.com/en/Maximum_subarray_problem), it talks about a paper working on the generalisation version of this maximum subarray problem.

> Generalizations
Similar problems may be posed for higher-dimensional arrays, but their solutions are more complicated; see, e.g., Takaoka (2002). Brodal & J\xf8rgensen (2007) showed how to find the k largest subarray sums in a one-dimensional array, in the optimal time bound O(n+k).

I spent some time on the paper, but I stuck on it. If anyone is also interested it, please have a look at [Computing Maximum-Scoring
Segments Optimally](http://ltu.diva-portal.org/smash/get/diva2:995901/FULLTEXT01).

- - -

Finally I passed problem according to [jinwu's DP solution](https://discuss.leetcode.com/topic/26169/clean-java-dp-solution-with-comment), which is very intuitive, using `d[i, j]` represents the max profit until `prices[j]` at most `i` transactions.

Ruby code

```ruby
  def max_profit(k, prices)
    return 0 if prices.count < 2

    n = prices.count
    if k > n/2
      differences = (1..prices.count-1).reduce([]) {|ar, i| ar << (prices[i] - prices[i-1]) }
      return differences.select{|num| num > 0}.reduce(:+) || 0
    end

    # d[i, j] represents the max profit until prices[j] at most i transactions
    d = Array.new(k+1){ Array.new(n+1){0} }
    (1..k).each do |i|
      tmp_max = d[i-1][0] - prices[0]

      (1..n-1).each do |j|
        d[i][j] = [ d[i][j-1], prices[j] + tmp_max ].max
        tmp_max = [ tmp_max, d[i-1][j] - prices[j] ].max
      end
    end

    return d[k][n-1]
  end
```

Time complexity: `O(kn)`

- - -

*UPDATE 2016-11-07* 

I\u2019ve been staring at [yishiluo\u2019s](https://discuss.leetcode.com/user/yishiluo) post [C++ Solution with O(n + klgn) time using Max Heap and Stack](https://discuss.leetcode.com/topic/9522/c-solution-with-o-n-klgn-time-using-max-heap-and-stack/7) for a whole day. It took me some effort to finally write a `O(n)` version according to his explanation. Well, to be honest, I\u2019m still a little confused about some bits. Here is my understanding, hoping someone could point out if my thought is right.

The **general idea** is to

+ split the `prices` array into several consecutive ascending segments, with valley and peak index denoting the start and end point.
+ use a stack to process these segments into all possible profits. 
+ employ a max heap to find the max `k` profits as the result.

The most challenging part for me is to understand when iterating valley-peak segments, how could we handle two adjacent segments? AKA

***How could we find all possible profits?***

Suppose we are facing two segments `(v1,p1)` and `(v2, p2)` under the limit `v1 < p1 < v2 < p2`, we would have two possible operations:

- buy at v1, sell at p1; buy at v2, sell at p2 ( `p1 - v1 + p2 - v2` )
- buy at v1, sell at p2 ( `p2 - v1` )

What we need to do is to find out which could make more profit. We would meet these situations:

`prices[v2] <= prices[v1]`
+ it\u2019s obvious that we\u2019d better make two transactions: `p1-v1` and `p2-v2`, and `v2` is more possible to make bigger profit. So, we pop out `(v1,p1)` from the stack.

`prices[v2] > prices[v1]`
+ `prices[p2] < prices[p1]` We\u2019d better use two transactions `p1-v1` and `p2-v2`, and `v1` is still more possible to make bigger profit. So, we keep `(v1,p1)` in the stack.
+ `prices[p2] >= prices[p1]` We are not sure about using one or two transactions to get higher profit, so we push two possible results into the `profits` array. Here comes **the key point**: we push `p2-v1` and `p1-v2` into `profits` array. Why? If we could only use one transaction, `p2-v1` is what we want, and if with two transactions, `p2-v1 + p1-v2` is also the max profit.

Here is an example about the key point situation: 

```ruby
prices #=> [ 1, 3, 2, 4 ]

# we could get
(v1, p1): (0 ,1) 
(v2, p2): (2, 3)

# then push two possible profits
profits << prices[p2] - prices[v1]
profits << prices[p1] - prices[v2]

profits #=> [3, 1]

# If k is 1, the top profits is 3
# If k is 2, the top profits is 3+1
```

Ruby code (it seems a bit longer as I've implement a max heap manually)

```ruby
  # Stack and Heap - O(n) + O(klogn)
  def max_profit(k, prices)
    n       = prices.count
    pair    = Struct.new(:v, :p){ def to_a; [v, p]; end }
    stack   = []
    profits = []

    if k > n/2
      differences = (1..prices.count-1).reduce([]) {|ar, i| ar << (prices[i] - prices[i-1]) }
      return differences.select{|num| num > 0}.reduce(:+) || 0
    end

    v2, p2 = 0, 0
    loop do
      break if v2 >= n-1

      v2 = (v2..n-2).detect{|i| prices[i] < prices[i+1]}
      break if v2.nil?

      p2 = (v2+1..n-1).detect{|i| prices[i] > prices[i-1]}

      # puts "v2: #{v2} p2: #{p2}"

      # v2 <= v1
      while !(stack.empty?) && prices[v2] <= prices[stack.last.v]
        v1, p1 = stack.pop.to_a
        profits << prices[p1] - prices[v1]
      end

      # v2 > v1 && p2 >= p1
      while !(stack.empty?) && prices[p2] >= prices[stack.last.p]
        v1, p1 = stack.pop.to_a
        profits << prices[p1] - prices[v2]

        v2 = v1
      end

      stack << pair.new(v2, p2)

      v2 = p2
    end

    while !(stack.empty?)
      v1, p1 = stack.pop.to_a
      profits << prices[p1] - prices[v1]
    end

    # puts "profits: #{profits.join(',')}"

    heap = PriorityQueue.new profits
    k.times.map{ heap.delete_max || 0 }.reduce(:+) || 0
  end

  class PriorityQueue
    # Binary Heap implementation

    attr_accessor :num, :array, :block

    def initialize(arr = [], &block)
      @array = arr.clone
      @num   = array.size
      @array.unshift(nil)

      @block = block || ->(a,b){ a < b }

      construct
    end

    def insert(item)
      self.num += 1
      array[num] = item
      swim(num)
    end

    def get_max
      array[1]
    end

    def delete_max
      return nil if num == 0

      max = array[1]

      exch(1, num)
      self.num -= 1
      sink(1)

      return max
    end

    def size
      num
    end

    def empty?
      num == 0
    end

    private

      def construct
        (num/2).downto(1).each{|i| sink(i) }
      end

      def swim(k)
        while k > 1 && less(k/2, k)
          exch(k, k/2)
          k = k/2
        end
        nil
      end

      def sink(k)
        while 2*k <= num
          j = 2*k
          j += 1 if j < num && less(j, j+1)

          break unless less(k, j)

          exch(k, j)
          k = j
        end
        nil
      end

      def less(a, b)
        block.call(array[a], array[b])
      end

      def exch(i, j)
        t        = array[i]
        array[i] = array[j]
        array[j] = t
      end

      def to_s
        puts (1..num).to_a.join("\	")
        puts array[1, num].join("\	")
      end

  end
```

Time complexity: `O(n + klgn)`