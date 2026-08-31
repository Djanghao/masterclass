# Is the time limit too strict for Ruby?

**Author:** skv46851
**Votes:** 2
**Link:** [https://leetcode.com/problems/super-ugly-number/solutions/76302/](https://leetcode.com/problems/super-ugly-number/solutions/76302/)

---

First I tried a solution based on Ugly Number II, but got TLE.

    def nth_super_ugly_number(n, primes)
        nums = Array.new(n, 1)
      qs, is = Array.new(primes.size, 1), Array.new(primes.size, 0)
    
      1.upto(n - 1) do |i|
        primes.each_with_index { |prime, idx| qs[idx] = nums[is[idx]] * prime }
        nums[i] = qs.min
        is.each_with_index { |_, idx| is[idx] += 1 if qs[idx] == nums[i] }
      end
    
      nums[n - 1]
    end


Then I tryied to solve it using a priority queue, but still got LTE. (**Note Ruby has no built-in priority queue, you have to implement it yourself**)

    class PriorityQueue
      def initialize(cmp)
        @queue, @cmp = [], cmp
      end
    
      def <<(value)
        @queue << value; _swim_(@queue.size - 1); self
      end
    
      def shift
        @queue[0], @queue[-1] = @queue[-1], @queue[0]
        @queue.pop.tap { _sink_(0) }
      end
    
      def peek
        @queue[0]
      end
    
      def empty?
        @queue.empty?
      end
    
      private def _swim_(k)
        while k > 0 && @cmp.call(@queue[k], @queue[(k - 1) / 2])
          @queue[k], @queue[(k - 1) / 2] = @queue[(k - 1) / 2], @queue[k]
          k = (k - 1) / 2
        end
      end
    
      private def _sink_(k)
        while k * 2 + 1 < @queue.size
          kk  = k * 2 + 1
          kk += 1 if @queue[kk + 1] && @cmp.call(@queue[kk + 1], @queue[kk])
          break if @cmp.call(@queue[k], @queue[kk])
    
          @queue[k], @queue[kk] = @queue[kk], @queue[k]
          k = kk
        end
      end
    end
    
    
    # @param {Integer} n
    # @param {Integer[]} primes
    # @return {Integer}
    def nth_super_ugly_number(n, primes)
       nums = Array.new(n, 1)
      minpq = PriorityQueue.new(Proc.new{ |(_, _, n1), (_, _, n2)| n1 < n2 })
    
      primes.each_with_index do |prime, index|
        minpq << [index, prime, prime]
      end
    
      1.upto(n - 1) do |i|
        nums[i] = minpq.peek[2]
    
        loop do
          index, prime, _ = minpq.shift
          minpq << [index + 1, prime, nums[index] * prime]
          break if minpq.empty? || minpq.peek[2] != nums[i]
        end
      end
    
      nums[n - 1]
    end


I did some tricks to speed up, but failed. Any suggestion?