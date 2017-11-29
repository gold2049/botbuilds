const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('MzY2OTI3MDkyODExNTYzMDA4.DP9trw.n4xDicCkJsMFOHTAvvSHY298icg');

// Comando Ajuda
bot.on('message',message => {
    if (message.content.startsWith('>help')){
        message.author.send('```Olá TENNO, você acabou de acorda da CRYOGÊNESYS?  Já sei, o ORDIS não lhe ensinou como operar essa máquina... É muito simples, basta digitar ">+ nome da arma ou warframe tudo junto". Exemplo: :>orthos.Caso a build que você procure  não tenha, contate o administrador! ou envie a sua. OBS: este bot ainda esta em desenvolvimento...```');
    }
});
// WARFRAME SLOTS OPERATION // ###############################################################################################
// [01] /pasta Build Frost
bot.on('message',message => {
    if (message.content.startsWith('>frost')){
        message.author.send('``` 1 - Build, Defesa... Stand United + steel Fibe & Armored Agility garante um Globo de gelo de 16k de vida, com retardo de 67 por cento.```  https://imgur.com/ie3ZlQt ``` 2 - Build Controle... Com duração, eficiencia e alcance no teto, esta builde e boa pra controle, congelando os inimigos e retardando no processo``` https://imgur.com/EQR4DD2 ``` 3 - Build mais conhecida como matador de onça, essa build e focada no 4º poder, Avalanche... Essa habilidade concede aos inimigos redução de armadura de 85 por cento, acompanhado de um dano de 3.2k``` https://imgur.com/t89uI5Z ``` OBS - alguns arcanes podem ser útil, tais como Arcane Grace, & Arcane Guardian ``` http://warframe.wikia.com/wiki/Arcane_Enhancement ');
    }
});
//[02] /pasta Build <Rhino prime>
bot.on('message',message => {
    if (message.content.startsWith('>rhino')){
        message.author.send('``` 1 - Rhino Stomp, Essa build e focada no controle de multidões... uso restrito a 4 habilidade, focado em resistencia e mobilidade, contando com 10 segundos de duração... ``` https://imgur.com/ZnW1pwP ``` 2 - Buff Rugido, Esta build esta focada em Aumentar o dano, muito eficar para matar inimigos com resistencia a dano! ``` https://imgur.com/6aPhdhA ``` 3 - Esta build, são para aqueles que ainda curte jogar de rhino! com esta build voce consegue chegar ate 72k de armadura ultilizando o combo -- IRON SHRAPNEL & IRONCLAD CHARGE``` https://imgur.com/fHqQpOF  https://imgur.com/0PUCioR ');
    }
});
//[03] /pasta Build Nova prime
bot.on('message',message => {
    if (message.content.startsWith('>nova')){
        message.author.send('``` 1 - Nova Prime - PoE Teleport/Speed Build - Foco em efficiencia e movimentação para facil locomoção; Extremamente útil para farm de plantas, minerais e Wisps. ``` https://imgur.com/e3uhv8v ``` 2 - Nova Slow and Tank, esta build e focada no uso da 4 - Slow em area, e tambem na habilidade 1 - redução de 80% de dano,``` https://imgur.com/AUyJotD ``` 3 - Nova Speed and NUCLEAR NUKE - Focada na habilidade 4 - Torna os inimigo mais rapidos em 60%, é a habilidade 2, um bolinha especial carregada de ódio e alcance  ``` https://imgur.com/i22gJkO ');
    }
});
//[04] /pasta Build Zerphyr>
bot.on('message',message => {
    if (message.content.startsWith('>zerphyr')){
        message.author.send('``` 1 - Especialmente prefiro ultilizar a build CC dela, contando com 2 mods, AVIATOR: reduz dano enquanto no ar em 40%, é o mod JET STREAM: +vel projetil +velocidade de corrida.``` https://imgur.com/uPgcns7  https://imgur.com/i22gJkO  ');
    }
});
//[00] /pasta Build teralyst
bot.on('message',message => {
    if (message.content.startsWith('>teralyst')){
        message.author.send('```1 - Explicativo: CHROMA, importante que você tem a AURA SHOTGUN AMP, pra aumentar o dano da tigris, esta sequencia de mods é altamente eficiente. Utilize a COR DE ENERGIA BRANCA para tank o EIDOLÃO, e tambem ofertar armadura para os aliados. Para carregar a armadura, e preciso que você receba dano, para aumentar o dano da sua arma.``` https://imgur.com/9q4x3ua        ```2 - EXPLICATIVO: TRINITY blessing, utilizamos para curar as isca de eidolon, dar suport ao time e ajudar no que der!``` https://imgur.com/rhBgiba        ```3 - EXPLICATIVO: NYX - Utilizamos a NYX para controle, confundindo os vonvalist, para que ele nao cure o teralist...``` https://imgur.com/cvJz8hp        ```4 - EXPLICATIVO: Harrow, utilize a`habilidade CONVENAT para proteger aliados e iscas de eidolon``` https://imgur.com/YnGOrl1 https://imgur.com/Iw1rdIQ        ```5 - ARMAS RECOMENDADAS TIGRIS PRIME FULL RADIAÇÃO, E HIKOU PARA SE CAUSAR DANO NO CASO DO CHROMA```https://imgur.com/VquhENL        ');
    }
});
//[05] /pasta Build Loki Prime
bot.on('message',message => {
    if (message.content.startsWith('>loki')){
        message.author.send('https://i.imgur.com/ezrDdWH.jpg ```1ª Build: Disarm Radial, Full alcance & Full eficiencia! 2 mods de sindicato para alternarem, Safeguard Switch & inradiant Disarm. Essa build tambem conta com capacete ARCANE Swindle, ou, Essence! ARCANO ENERGYSE para deixa as coisas mais interessantes!``` https://i.imgur.com/ICxhlqU.jpg ```2 ª Build -  Essa build é focada em missoes de procura! Tais como procurar escuturas ayatan e sabotagem! ARCANES PRINCIPAIS ENERGYSE, Capacete: Essense!``` https://i.imgur.com/f2h3uvl.jpg ```3ª Build - Hushed Invisibility! para Safeplayers! Pura Invisibilidade! Otimos para KUVA FLOOD!``` https://i.imgur.com/6EjqAqb.png  https://i.imgur.com/PIMBec8.png  https://i.imgur.com/9T1l5QJ.png');
    }
});
//[06] /pastaBuild Ash Prime
bot.on('message',message => {
    if (message.content.startsWith('>ash')){
        message.author.send('```Build equilibrada, com duração para invisibilidade.``` https://i.imgur.com/K1EgLBH.jpg');
    }
});
//[07] /pasta Build Atlas
bot.on('message',message => {
    if (message.content.startsWith('>atlas')){
        message.author.send('``` Build 1, Golem, Focada pra summonar Golens``` https://i.imgur.com/I7PWkBl.jpg ```2 Build: Onepunchmen, Focada na primeira habilidade``` https://i.imgur.com/iyHuJ6A.jpg');
    }
});
//[08] /pasta Build Banshee
bot.on('message',message => {
    if (message.content.startsWith('>banshee')){
        message.author.send('```1 Ultimato: Hydron ou defesa, otima build pra limpar area...``` https://i.imgur.com/hZihSfD.jpg ```2 Interceptação: Baseada no Range e eficiência, eficaz pra segurar torre!``` https://i.imgur.com/jBoI29P.jpg');
    }
});
//[09] /pasta Build Chroma
bot.on('message',message => {
    if (message.content.startsWith('>chroma')){
        message.author.send('```1 Gold dragon: Farma creditos, Tenha em mente Energyse.``` https://i.imgur.com/ily5w0w.jpg ```Eidolon Slayer, Single shot. Tenha em mente Guardian.``` https://i.imgur.com/SpiNMrc.jpg');
    }
});
//[10] /pasta Build Ember
bot.on('message',message => {
    if (message.content.startsWith('>ember')){
        message.author.send('```1 Blast: Para os Loucos que escolheram tocar fogo no mundo!``` https://i.imgur.com/upch2Fa.jpg ```2 Cautic Control: Focada no controle de multidões.``` https://i.imgur.com/WLDfr35.jpg');
    }
});
//[11] /pasta Build Equinox
bot.on('message',message => {
    if (message.content.startsWith('>equinox')){
        message.author.send('```1 Build pra matar! ``` https://i.imgur.com/q8wHLdP.jpg ``` 2 Build pra Upar! ```  https://i.imgur.com/HuQclmf.jpg');
    }
});
//[12] /pasta Build Excalibur
bot.on('message',message => {
    if (message.content.startsWith('>excalibur')){
        message.author.send('```1 Buil normal, Resistente!``` https://i.imgur.com/4Xb6Hwz.jpg');
    }
});
//[13] /pasta Build Gara
bot.on('message',message => {
    if (message.content.startsWith('>gara')){
        message.author.send('```Gara, Defensiva.``` https://i.imgur.com/HDs8o4I.jpg');
    }
});
//[14] /pasta Build Harrow
bot.on('message',message => {
    if (message.content.startsWith('>harrow')){
        message.author.send('```Harrow, Pode tirar força e adicionar na duração.``` https://i.imgur.com/I0ke99P.jpg');
    }
});
//[15] /pasta Build Hydroyd
bot.on('message',message => {
    if (message.content.startsWith('>hydroid')){
        message.author.send('```Aquela velha build pra Farm, Não se esqueça do Pilfering Swarm.``` https://i.imgur.com/MANqar6.jpg');
    }
});
//[16] /pasta Build Inaros
bot.on('message',message => {
    if (message.content.startsWith('>inaros')){
        message.author.send('```Tão tanker quanto você poder aguentar.``` https://i.imgur.com/V2bhZej.jpg');
    }
});
//[17] /pasta Build Mag
bot.on('message',message => {
    if (message.content.startsWith('>mag')){
        message.author.send('```Equilibrada.``` https://i.imgur.com/hORaKLr.jpg ```Loot detector.``` https://i.imgur.com/FCVGY3u.jpg');
    }
});
//[18] /pasta Build Mesa
bot.on('message',message => {
    if (message.content.startsWith('>mesa')){
        message.author.send('```Desespero, focada na ultimate, 2, 3 & 4 skill...``` https://i.imgur.com/7P4a3mS.jpg');
    }
});
//[19] /pasta Build Nekros
bot.on('message',message => {
    if (message.content.startsWith('>nekros')){
        message.author.send('``` 1 Farm: Arcane Pulse, Arcane Eruption combinação perfeita pra farm...``` https://i.imgur.com/Oo3gtAb.jpg ```2 Tank: Shadow of dead, junto com um energyse... combinação perfeita para o chaos... ``` https://i.imgur.com/NCqsVRt.jpg');
    }
});
//[20] /pasta Build Nidus
bot.on('message',message => {
    if (message.content.startsWith('>nidus')){
        message.author.send('```Larva.``` https://i.imgur.com/WbmXL8m.jpg ```Ultimato.``` https://i.imgur.com/cGQXBWI.jpg');
    }
});
//[21] /pasta Build Oberon
bot.on('message',message => {
    if (message.content.startsWith('>oberon')){
        message.author.send('```Resistente``` https://i.imgur.com/FBtKcNi.jpg');
    }
});
//[22] /pasta Build octavia
bot.on('message',message => {
    if (message.content.startsWith('>octavia')){
        message.author.send('```Uma bolinha Nervosa, se quer saber!``` https://i.imgur.com/HN7fPwN.jpg https://i.imgur.com/fcZlQHS.jpg');
    }
});
//[23] /pasta Build Trinity
bot.on('message',message => {
    if (message.content.startsWith('>trinity')){
        message.author.send('```Eidolon.``` https://i.imgur.com/Nh6zdxi.jpg ```Raid.``` https://i.imgur.com/GCiFMnO.jpg');
    }
});
//[24] /pasta Build Vauban
bot.on('message',message => {
    if (message.content.startsWith('>vauban')){
        message.author.send('```Equilibrada.``` https://i.imgur.com/Edz5CBH.jpg ```Raid.``` https://i.imgur.com/FqCeH0N.jpg');
    }
});
// PRIMARIAS SLOTS OPERATION // ################################################################################################
//[01] /pasta Build Tigris
bot.on('message',message => {
    if (message.content.startsWith('>tigris')){
        message.channel.send('``` 1 - Build, Status. Ótima build pra hit-kill em grineer nivel 150 com apenas 2 tiros. altamente poderosa! ```   https://imgur.com/1gDEGAW ``` 2 - Build, 100% dano. Muito boa pra matar Eidolão, acompanhado com um chroma, é claro...``` https://imgur.com/h9gFN1a ``` 3 - Build, Silenciada. Embora a galera não esteja acostumada a jogar com esse tipo de missão stealth.``` https://imgur.com/0f1HM9B ');
    }
});
//[02] /pasta Build Arca plasmor
bot.on('message',message => {
    if (message.content.startsWith('>plasmor')){
        message.author.send('```Bane grineer``` https://i.imgur.com/jkxoWi3.jpg ```Radiação Critica``` https://i.imgur.com/emiV9JA.jpg ```Full Status``` https://i.imgur.com/Azix4Ca.jpg');
    }
});
//[03] /pasta Build astilla
bot.on('message',message => {
    if (message.content.startsWith('>astilla')){
        message.author.send('```Astilla build``` Link https://i.imgur.com/ql2Mxmp.jpg');
    }
});
//[04] /pasta Build Boar prime
bot.on('message',message => {
    if (message.content.startsWith('>boar')){
        message.author.send('```1 - Corrosivo + Explosivo.```  https://i.imgur.com/Jt1ZWBU.jpg ```Viral + Radiação.``` https://i.imgur.com/4XLWhCh.jpg');
    }
});
//[05] /pasta Build Boltor
bot.on('message',message => {
    if (message.content.startsWith('>boltor')){
        message.author.send('```Boltor Build.``` https://i.imgur.com/bPsoxss.jpg');
    }
});
//[06] /pasta Build Braton
bot.on('message',message => {
    if (message.content.startsWith('>braton')){
        message.author.send('```Braton: Viral+Corte.``` https://i.imgur.com/DVaP9QG.jpg');
    }
});
//[07] /pasta Build Cernos
bot.on('message',message => {
    if (message.content.startsWith('>cernos')){
        message.author.send('```Multalist``` https://i.imgur.com/0UEW3HI.jpg ```Prime``` https://i.imgur.com/Qx6lEvo.jpg  ```Racta``` https://i.imgur.com/olm2Vyv.jpg');
    }
});
//[08] /pasta Build Dread
bot.on('message',message => {
    if (message.content.startsWith('>dread')){
        message.author.send('```Dread``` https://i.imgur.com/GpMgXIJ.jpg');
    }
});
//[09] /pasta Build Glaxion
bot.on('message',message => {
    if (message.content.startsWith('>glaxion')){
        message.author.send('```Glaxion: Viral+Corte.``` https://i.imgur.com/ef4dWPU.jpg');
    }
});
//[10] /pasta Build Gorgon
bot.on('message',message => {
    if (message.content.startsWith('>gorgon')){
        message.author.send('```Gorgon: Wraith.``` https://i.imgur.com/JALeGDN.jpg');
    }
});
//[11] /pasta Build Hek
bot.on('message',message => {
    if (message.content.startsWith('>hek')){
        message.author.send('```Corrosivo``` https://i.imgur.com/VrXB67C.jpg ```Hybrida``` https://i.imgur.com/r3EwSBD.jpg ```Critico.``` https://i.imgur.com/qkhig8K.jpg ');
    }
});

// SECUNDARIAS SLOTS OPERATION // ##############################################################################################
// MELEE'S SLOTS OPERATION // ##################################################################################################
//Build Atterax
bot.on('message',message => {
    if (message.content.startsWith('>atterax')){
        message.channel.send('``` 1 - Relentles Build, Esta build consiste em contador de corpo a corpo, Focada no dano critico, escola de foco ideal de NARAMON.``` https://imgur.com/N13aELE ``` 2 - Viral build, muito eficaz contra corpus. mais pode ser usada contra qualquer facção! ``` https://imgur.com/gHaBl2L ``` 3 - Red critico, alcançando a casa do carai... com maiming strike e berserker junto pra bater muito rápido ``` https://imgur.com/ljCfLfJ  ');
    }
});

//Primeira orthos prime
bot.on('message',message => {
    if (message.content.startsWith('>orthos')){
        message.channel.send('```Build focada no Status Chance, com leve critico.``` https://images-ext-1.discordapp.net/external/EYp--dzfEZoqbJaLZMyXOEiUeEdnADzCIIJZVdf2p94/https/cdn.discordapp.com/attachments/347428507892187140/349748527708110848/Warframe0076.jpg?width=1026&height=386 ');
    }
});
// KUBROWS SLOTS OPERATION // ###################################################################################################
// SENTINELAS SLOTS OPERATION // ################################################################################################


