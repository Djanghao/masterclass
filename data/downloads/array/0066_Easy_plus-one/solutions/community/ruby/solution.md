# Ruby solutions: Elegant ruby, pointer using modulus, and recursion

**Author:** viethqhoang
**Votes:** 9
**Link:** [https://leetcode.com/problems/plus-one/solutions/2090046/](https://leetcode.com/problems/plus-one/solutions/2090046/)

---

## Elegant Ruby solution

```
# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    digits.join.to_i.next.digits.reverse
end
```

## Pointer with modulus solution

This is what a technical interview is looking for....

```
# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    carryover, pointer = 1, -1
    
    while carryover.positive?
        break digits.unshift(carryover) if digits[pointer].nil?
        
        sum = digits[pointer] + carryover
        carryover = sum / 10
        digits[pointer] = sum % 10
        pointer -= 1
    end
        
    digits
end
```

## Recursiion of pointer with modulus solution

```
# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits, pointer = -1, carryover = 1)
    return digits if carryover.zero?
    return digits.unshift(carryover) if digits[pointer].nil?
    
    sum = digits[pointer] + carryover
    digits[pointer] = sum % 10
    
    plus_one(digits, pointer - 1, sum / 10)
end
```

## Benchmark

```
# @param {Integer[]} digits
# @return {Integer[]}
def plus_one_ruby_like(digits)
    digits.join.to_i.next.digits.reverse
end

# @param {Integer[]} digits
# @return {Integer[]}
def plus_one_pointer(digits)
    carryover, pointer = 1, -1

    while carryover.positive?
        break digits.unshift(carryover) if digits[pointer].nil?

        sum = digits[pointer] + carryover
        carryover = sum / 10
        digits[pointer] = sum % 10
        pointer -= 1
    end

    digits
end

# @param {Integer[]} digits
# @return {Integer[]}
def plus_one_recursive(digits, pointer = -1, carryover = 1)
    return digits if carryover.zero?
    return digits.unshift(carryover) if digits[pointer].nil?

    sum = digits[pointer] + carryover
    digits[pointer] = sum % 10

    plus_one_recursive(digits, pointer - 1, sum / 10)
end

require 'benchmark'

n = 1_000_000
test_cases =
    [
        [1,2,3],
        [4,3,2,1],
        [9]
    ]

Benchmark.bmbm do |x|
    x.report('plus_one_ruby_like()') { n.times { |nth| plus_one_ruby_like(test_cases[nth % test_cases.length]) } }
    x.report('plus_one_pointer()')  { n.times { |nth| plus_one_pointer(test_cases[nth % test_cases.length]) } }
    x.report('plus_one_recursive()')  { n.times { |nth| plus_one_recursive(test_cases[nth % test_cases.length]) } }
end
```

Result:

Ruby-like solution is slower due to the new object creations and transformation.

The pointer is faster since its updating the existing object, `digits`, in place.

This can be verified by calling `object_id` on the resulting object. The Ruby-like solution creates new objects, while the pointer solution result has the same `object_id` as the input.

```
Rehearsal --------------------------------------------------------
plus_one_ruby_like()   0.872726   0.003306   0.876032 (  0.876655)
plus_one_pointer()     0.176923   0.000899   0.177822 (  0.178070)
plus_one_recursive()   0.185491   0.000453   0.185944 (  0.185986)
----------------------------------------------- total: 1.239798sec

                           user     system      total        real
plus_one_ruby_like()   1.449080   0.008460   1.457540 (  1.458386)
plus_one_pointer()     0.176361   0.001490   0.177851 (  0.178214)
plus_one_recursive()   0.188032   0.001648   0.189680 (  0.190059)
```