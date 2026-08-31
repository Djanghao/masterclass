# Ruby convert a number to hexadecimal representation ( base 16 ) useful for compressions

**Author:** 2018hsridhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/hexspeak/solutions/5900808/](https://leetcode.com/problems/hexspeak/solutions/5900808/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {String} num
# @return {String}
def to_hexspeak(num)
    hexRepresentation = []
    # hexMap = Hash.new()
    # h = { "CA" => "California", "MA" => "Massachusetts" }
    # create object of class ( no use the class )
    hexMap = {
        0 => 'O',
        1 => 'I',
        10 => 'A',
        11 => 'B',
        12 => 'C',
        13 => 'D',
        14 => 'E',
        15 => 'F'
    }
    num = num.to_i
    base = 16
    while(num >= base)
        rem = num % base
        numEquiv = rem
        if(hexMap.has_key?(rem))
            numEquiv = hexMap[rem]
        else
            return "ERROR"
        end
        hexRepresentation.append(numEquiv)
        num = (num / base).floor()
    end
    numEquiv = num
    if(hexMap.has_key?(numEquiv))
        numEquiv = hexMap[numEquiv]
    else
        return "ERROR"
    end
    hexRepresentation.append(numEquiv)
    hexRepresentation.reverse!()
    hexSpeak = hexRepresentation.join("")
    return hexSpeak
end
```