function startGame(){
    //starting a new game

    let playerName: string | undefined =getInputValue('playername');
    logPlayer(playerName);
   placeAlert('name');
postScore(100,playerName);

    
}
function logPlayer(name : string='MultiMath player'): void{
    console.log(`New game starting for player: **${name}** `)
}
function getInputValue(elementId: string): string | undefined{
    const inputElement :HTMLInputElement =<HTMLInputElement>document.getElementById(elementId);
    if(inputElement.value===''){
            return undefined;
    }
    else return inputElement.value;

}
function postScore(score : number, playerName ?: string) : void{
   const scoreElement: HTMLElement | null= document.getElementById('postedScore');
   scoreElement!.innerText=`${score} - ${playerName}`;

}

document.getElementById('startGame')!.addEventListener('click',startGame);

function  getPlayerName(id: string): string | undefined{
    const inputName :HTMLInputElement =<HTMLInputElement>document.getElementById(id);
    if(inputName.value===''){
        return "No name was provided"
    }else
   return inputName!.value;
}
function placeAlert(alert: string):void{
    const name: string | undefined=getPlayerName('playername');
    (document.getElementById(alert))!.innerText=`YES!!!  this is my name ${name}`;
}

