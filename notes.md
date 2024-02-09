

# feature play against computer

## Three types of play algorithm:

- dumb: random moves
- play to win(p2w): focuses on winning
- play to stop(p2s): focuses on preventing player wins

Computer Player needs to be able to:
    
    make a move in the game
        - uses existing functions
    
    not make illegal moves(claimed cells)
        - make function to check legality of move?
        - possibly need to work around asynchronicity of state
    
    p2w and p2s should be aware of potential victories and let that influence cell selection
        - functions to look for potential wins in either cell array
                
    only make moves on it's own turn
    
    also need to prevent user from making move during computer's turn

order of steps needed to build this:
        
    1. build legal move checker
    2. build dumb algo
    3. prevent moves from wrong players
    4. front end interface to choose computer opponent
    5. build other algos
    6. visual florishes
