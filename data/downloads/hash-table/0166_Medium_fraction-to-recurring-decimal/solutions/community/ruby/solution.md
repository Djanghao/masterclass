# Clean Ruby solution with comments (72 ms)

**Author:** thecooltodd
**Votes:** 3
**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/51196/](https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/51196/)

---

    def fraction_to_decimal(n, d)
    
    	# Get +/-
    	result = n*d >= 0 ? '' : '-'
    
    	# Get whole number
    	n = n.abs
    	d = d.abs
    	result << (n/d).to_s
    	n %= d
    
    	# Check whole number
    	return result if n == 0
    
    	# Get decimal
    	result << '.'
    	check = Hash.new
    
    	# Division
    	while not n.zero? and check[n].nil?
    		check[n] = result.length
    		n *= 10
    		result << (n/d).to_s
    		n %= d
    	end
    
    	# Check repeating
    	result.insert(check[n], '(') << ')' if check[n]
    
    	return result
    end