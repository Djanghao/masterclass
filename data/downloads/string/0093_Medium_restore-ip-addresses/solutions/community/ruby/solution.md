# Ruby solution

**Author:** ozovalihasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/3080953/](https://leetcode.com/problems/restore-ip-addresses/solutions/3080953/)

---

# Code
```ruby []
# @param {String} s
# @return {String[]}
MIN_VALUE_OF_INTEGER = 0
MAX_VALUE_OF_INTEGER = 255
MIN_INTEGER_LENGTH = MIN_VALUE_OF_INTEGER.digits.length
MAX_INTEGER_LENGTH = MAX_VALUE_OF_INTEGER.digits.length
INTEGERS_COUNT = 4
TOTAL_DOTS_COUNT = INTEGERS_COUNT - 1

def restore_ip_addresses(s)
  return [] unless s.size.between?(MIN_INTEGER_LENGTH * INTEGERS_COUNT, MAX_INTEGER_LENGTH * INTEGERS_COUNT)

  find_possible_ip_addresses(s)
end

def find_possible_ip_addresses(s)
  
  nums_starting_from = find_possible_nums(s)
  nums_starting_from.default = []
  
  starting_index = 0
  result = nums_starting_from[ starting_index ]

  TOTAL_DOTS_COUNT.times do |previous_dots_count|
    result.map! do |str|
      
      nums_starting_from[str.size - previous_dots_count].map do |str2|
                                                          str.clone << "." << str2 
                                                        end

    end
    
    result.flatten!
  end
  
  length_without_dot = s.size
  result.select {|ip_address| valid_ip_address? ip_address, length_without_dot }
end

def valid_ip_address?(ip_address, length_without_dot)
  ip_address.size == length_without_dot + TOTAL_DOTS_COUNT
end

def find_possible_nums(s)
  nums_starting_from = {}

  possible_length_of_integers = (MIN_INTEGER_LENGTH..MAX_INTEGER_LENGTH).to_a
  s = s.split("")
  s.each_with_index do |char, index|

    nums_starting_from[index] = possible_length_of_integers.map do |length|
                                                                  s.slice(index, length).join
                                                                end
     
    nums_starting_from[index].reject! {|num| invalid_integer? num }
    nums_starting_from[index].uniq!
  end

  nums_starting_from
end

def invalid_integer?(num)
  num.to_i > MAX_VALUE_OF_INTEGER || ( num.match(/^0.+/) )
end
```