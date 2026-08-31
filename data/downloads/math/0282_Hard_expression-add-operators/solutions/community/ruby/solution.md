# Iterative solution in Ruby

**Author:** skv46851
**Votes:** 0
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/71974/](https://leetcode.com/problems/expression-add-operators/solutions/71974/)

---

    def add_operators(num, target)
      return [] if num.empty?
    
      split = Array(0...num.size).each_with_object({}) do |spt, memo|
        subnum = num.slice(spt...num.size)
        memo[subnum] =
          if subnum[0] == '0'
            [[0, subnum.slice(1..-1)]]
          else
            Array(1..subnum.size).map do |subspt|
              [subnum.slice(0...subspt).to_i, subnum.slice(subspt..-1)]
            end
          end
      end
    
      rnumbers = Array(1..num.size).map { |spt| num[-spt..-1] }
        rcache = rnumbers.each_with_object({}) { |n, memo| memo[n] = [] }
    
      out = []
      rnumbers.each do |number|
        q, c = [[[nil], number, '']], rcache[number]
    
        until q.empty?
          deque, istream, ostream = q.shift
    
          split[istream].each do |lnum, rnum|
            if rnum.empty?
              deque.push(lnum); _calculate_(deque, :'$')
              if number == num
                out << "#{ostream}#{lnum}" if deque[-1] == target
              else
                c << [deque[-1], "#{ostream}#{lnum}"]
              end; next
            end
    
            rcache[rnum].each do |v, e|
              de = deque.dup; de.push(lnum); _calculate_(de, :+)
              de.push(v); _calculate_(de, :'$')
              if number == num
                out << "#{ostream}#{lnum}+#{e}" if de[-1] == target
              else
                c << [de[-1], "#{ostream}#{lnum}+#{e}"]
              end
            end
    
            de = deque.dup; de.push(lnum); _calculate_(de, :-)
            q << [de, rnum, "#{ostream}#{lnum}-"]
    
            de = deque.dup; de.push(lnum); _calculate_(de, :*)
            q << [de, rnum, "#{ostream}#{lnum}*"]
          end
        end
      end
    
      out
    end
    
    private def _calculate_(deque, next_op)
      case next_op
      when :+, :-, :'$'
        while true
          case deque[0]
          when nil; break
          when :+; deque.push(deque.pop + deque.pop)
          when :-; deque.push(- deque.pop + deque.pop)
          when :*; deque.push(deque.pop * deque.pop)
          end
          deque.shift
        end
        deque.unshift(next_op)
      when :*
        if deque[0] == :*
          deque.shift
          deque.push(deque.pop * deque.pop)
        end
        deque.unshift(next_op)
      end
    end