# Solution with detailed explanation

**Author:** NikkiNicholas
**Votes:** 301
**Link:** [https://leetcode.com/problems/poor-pigs/solutions/94273/](https://leetcode.com/problems/poor-pigs/solutions/94273/)

---

To be honest, I've spent several days thinking about this question. It's not only fun, but also confusing. it drives me up the wall, especially for its **easy** difficulty. \U0001f629

### Thinking Process

***1. What if you only have one shot?***

> Eg. **4** buckets, **15** mins to die, and **15** mins to test.

The answer is **2**. Suppose we use A and B to represent pigs, we could have

![0_1478958363340_upload-5c96756b-ca9f-41f2-b597-ff57a040ebe8](/uploads/files/1478958363472-upload-5c96756b-ca9f-41f2-b597-ff57a040ebe8.png)

Obviously we could use the binary form to represent the solution.

![0_1478958322597_upload-0812d848-8375-4422-813e-b97bdd37c653](/uploads/files/1478958322907-upload-0812d848-8375-4422-813e-b97bdd37c653.png) 

**Conclusion**: If we have `x` pigs,  we could use them to represent (encode) `2^x` buckets.

***2. What if we could have more than one attempts?***

> Eg. **4** buckets, **15** mins to die, and **30** mins to test.

At the moment, I consider the problem as an encoding problem: *With more attempts, how to use fewer pigs to represent all the buckets?*

I got lost at this step by keep thinking the binary way. After hanging around the forum, I got the idea to change my views. Let's go back to the one shot situation. What does the binary form mean? It's much easier if we regard it as:

+ `0` means the pig does not drink and die.
+ `1` means the pig drinks in the first (and only) round.

We could generalise with:

+ `0` means the pig does not drink and die.
+ `1` means the pig drinks in the first round and die.
+ `2` means the pig drinks in the second round and die.
...
+ `t` means the pig drinks in the t-th round and die.

**Conclusion**: If we have `t` attempts, we could use `t+1`-based number to represent (encode) the buckets. (That's also why the first conclusion uses the `2`-based number)

### Example

> Eg. **8** buckets, **15** mins to die, and **40** mins to test.

We have **2** (`= (40/15).floor`) attempts, as a result we'll use **3**-based number to encode the buckets. 

How many pigs do we need? Answer is 2 (`= Math.log(8, 3).ceil`)

![0_1478960257723_upload-0da5c126-bf43-4183-935d-c2c1a5b5df15](/uploads/files/1478960260176-upload-0da5c126-bf43-4183-935d-c2c1a5b5df15.png) 

For example 3-based number `02` means: the pig **A** does not drink and die, and the pig **B** drinks in the second round and die.

### Ruby Code

```ruby
class FooTest < Minitest::Test
  def poor_pigs(buckets, minutes_to_die, minutes_to_test)
    states = minutes_to_test / minutes_to_die + 1

    Math.log(buckets, states).ceil
  end

  def test_run
    assert_equal 1, poor_pigs(2, 10, 10)
    assert_equal 2, poor_pigs(4, 10, 10)
    assert_equal 3, poor_pigs(8, 10, 10)
    assert_equal 4, poor_pigs(16, 10, 10)

    assert_equal 1, poor_pigs(2, 10, 20)
    assert_equal 2, poor_pigs(4, 10, 20)
    assert_equal 2, poor_pigs(8, 10, 20)
    assert_equal 3, poor_pigs(16, 10, 20)

    assert_equal 5, poor_pigs(1000, 15, 60)
  end
end

```