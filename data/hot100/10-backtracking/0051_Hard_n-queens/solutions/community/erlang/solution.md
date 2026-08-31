# erlang solve N-Queens

**Author:** angle600
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-queens/solutions/1904104/](https://leetcode.com/problems/n-queens/solutions/1904104/)

---

```
-export([solve_n_queens/1,solve/3]).


-spec solve_n_queens(N :: integer()) -> [[unicode:unicode_binary()]].

solve_n_queens(N) ->
	flush(),
	solve(self(),N,[]),
	Q_rec = loop([],1),
	 [ [ binary:list_to_bin(lists:duplicate(Y-1,$.) ++ "Q" ++ lists:duplicate(N-Y,$.) )   || Y<-X  ]     ||X <- Q_rec ]
 .



flush() ->
	receive
		_ -> flush()
	after 0 ->
		ok
	end
.


loop(Q,0) ->
	Q;
loop(Q,N) ->
	receive
		{thread,Thread_n} -> loop(Q,Thread_n + N -1);
		{ok,Q_ok} ->  
            lists:foreach( fun(H) -> io:format("~p,", [H]) end, Q_ok),
			io:format("~n", []),
            loop([ Q_ok | Q],N-1);
		{fail,_} -> loop(Q,N-1);
		_ -> loop(Q,N)
	end	
.	



 solve(Supper,N,Q) ->
 	Q_len = length(Q),
 	if
 	 	Q_len =/= N -> 
 	 		Thread = [spawn(?MODULE,solve,[Supper,N,[X | Q ]]) || X <- lists:seq(1,N) -- Q  ],
 	 		Thread_len = length(Thread),
 	 		Supper ! {thread,Thread_len};
 	 	true ->
 	 		IS_v = is_valid(Q),
 	 		if
 	 			IS_v -> Supper ! {ok,Q};
 	 			true -> Supper ! {fail,Q}
 	 		end

 	end 
 .	


slash_valid([],_,_) ->
	true;
slash_valid([H|T],P,Col) ->
	Dec_P = erlang:abs(H - P),
	if
		Dec_P == Col ->  false;
		true -> slash_valid(T,P,Col+1)
	end
.

is_valid([]) ->
	true;
is_valid([QH | QT]) ->
	IS1 = slash_valid(QT,QH,1),
	if
		IS1 == false -> false;
		true ->
			is_valid(QT)
	end
.	





```