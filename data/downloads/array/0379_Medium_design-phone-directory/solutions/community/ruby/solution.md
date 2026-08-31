# Ruby two Sets solution + concise/easy one

**Author:** konovalov-nk
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/2409092/](https://leetcode.com/problems/design-phone-directory/solutions/2409092/)

---

I had absolute breakthrough after reading through some solutions there, specifically one from mighty [Stefan](https://leetcode.com/problems/design-phone-directory/discuss/85370/Subclassing-Set-PythonJava).

First one initially uses O(1) memory, and fills the memory as we go through adding numbers.
A bit more difficult to understand, but the essence of the algorithm is that we have iterator that runs through available slots first, and then continues to pull numbers from the `number_pool`:

```ruby
# rescue is necessary since we'll run out of numbers_pool eventually with the StopIteration exception
number = free_slots.first || numbers_pool.next rescue -1
```

I've been thinking how can we make it use `O(1)` initially, but still use only a single `Set`, and couldn't figure this out on my own or by reading other solutions.

```ruby
require "set"

class PhoneDirectory < Set
  def initialize(max_numbers)
    super()
    @free_slots = Set.new
    @numbers_pool = max_numbers.times.to_enum
  end

  def get
    number_enumerator.next
  end

  def check(number)
    !include?(number)
  end

  def release(number)
    free_slots.add(number) if delete?(number)
  end

  private
  
  def number_enumerator
    @number_enumerator ||= Enumerator.new do |yielder|
      loop do
        number = free_slots.first || numbers_pool.next rescue -1
        free_slots.delete(number)
        add(number) # unless number.negative?
        yielder << number
      end
    end
  end

  attr_reader :free_slots, :numbers_pool
end
```

This one allocates O(n) memory initially and have much less lines of codes, so it might be easier to memorize this one. All you have to do is override `get` and alias other methods.

```ruby
require "set"

class PhoneDirectory < Set
  def initialize(max_numbers)
    super(max_numbers.times)
  end

  def get
    delete?(number = first) ? number : -1
  end

  alias check include?
  alias release add
end
```

Day by day, my belief that Ruby is designed to work with Algo/DS only grows stronger.
It can be concise and yet still readable, with an awesome std library to support your code.
Python library also looking pretty decent (and in some cases even better) but I feel like it's less readable.

Any suggestions/improvements are welcome!