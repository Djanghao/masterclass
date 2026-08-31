%% Definition for singly-linked list.
%%
%% -record(list_node, {val = 0 :: integer(),
%%                     next = null :: 'null' | #list_node{}}).

-spec game_result(Head :: #list_node{} | null) -> unicode:unicode_binary().
game_result(Head) ->
  .