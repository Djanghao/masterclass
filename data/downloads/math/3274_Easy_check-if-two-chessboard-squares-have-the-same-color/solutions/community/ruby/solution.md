# Checkmate, Simple as

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5788008/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5788008/)

---

Tons of better ways to do this but this process is easy to follow. 

First create a hash with 'a'..'h' as the keys and 1..8 as the values. 

Get the integer value of the columns of both coordinates and check if the sum is even. If it is save the colour as black, otherwise white. 

Check if if the two colour strings are equal and return the result. 
# Code
```ruby []
# @param {String} coordinate1
# @param {String} coordinate2
# @return {Boolean}
def check_two_chessboards(coordinate1, coordinate2)
    alphabet = ('a'..'h').to_a
    hash = {}
    c1Column = 0
    c1Row = 0
    c2Column = 0
    c2Row = 0
    coo1col = ""
    coo2col = ""
        alphabet.each_with_index do |c,i|
            hash[c] = i+1
        end
    c1array = coordinate1.split('')
        c1array.each_with_index do |a,i|
            if i == 0
                c1Column = hash[a]
            else
                c1Row = a.to_i
            end
            coo1col = (c1Column + c1Row) % 2 == 0 ? 'black' : 'white'
        end
    c2array = coordinate2.split('')
        c2array.each_with_index do |a,i|
            if i == 0
                c2Column = hash[a]
            else
                c2Row = a.to_i
            end
            coo2col = (c2Column + c2Row) % 2 == 0 ? 'black' : 'white'
        end

    return coo1col == coo2col ? true : false

end
```