const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
    console.log('WikiEditAssist を起動、実行しました。')
    client.user.setActivity('Type w/help｜Minecraft', { type: 'PLAYING' })
})

client.on('message', message => {
    if (message.content === 'w/help') {
        message.channel.send({
            embed: {
                title: "ヘルプ",
                descrption: "Usege: `w/<command> [引数|code]`",
                color: 0xff8f2e,
                timestamp: new Date(),
                footer: {
                    text: "開発元:SpaceServer.net"
                },
                fields: [
                    {
                        name: "**w/help**",
                        value: "ヘルプを送信します。"
                    },
                    {
                        name: "**w/ch**\n`Usege:w/ch <引数>`",
                        value: "指定した引数のヘルプを送信します。"
                    },
                    {
                        name: "**Botの招待**",
                        value: "https://discord.com/api/oauth2/authorize?client_id=787057202610962492&permissions=22528&scope=bot"
                    },
                    {
                        name: "**w/ch の引数一覧**",
                        value: "`w/ch-<引数>`で指定できる引数一覧はこちらです。"
                    },
                    {
                        name: "**1**",
                        value: "記法の検索を行います。"
                    },
                    {
                        name: "**2**",
                        value: "当Wikiに利用されているプラグインの一覧を送信します。"
                    },
                ]
            }
        })
    }
    if (message.content === 'w/ch') {
        message.channel.send({
            embed: {
                title: "予期せぬ出来事の発生 : コマンドエラー",
                descrption: "Botは`w/ch`を処理しようとしましたがコマンドの処理に失敗しました。",
                color: 0xff0000,
                timestamp: new Date(),
                footer: {
                    test: "ErrorCode:`0x1010`"
                },
                fields: [
                    {
                        name: "**Reason:** __引数が指定されていません。__",
                        value: "Botはあなたが提示した引数を理解できませんでした。もう一度確認してください。\n`例:w/ch 1`"
                    }
                ]
            }
        })
    }
    if (message.content === 'w/ch-1') {
        message.channel.send({
            embed: {
                title: "記法の検索モード : 検索待機中...",
                descrption: "Search is `w/ch-<記法>",
                color: 0xff000,
                timestamp: new Date(),
                fields: [
                    {
                        name: "使いたい記法や公式ドキュメントでもわからない記法を入力してください。\n`Usege:w/ch1-[検索ワード]`",
                        value: "\n\n__結果が送信されない場合__\n`Resaon:検索ワードを変えるか運営に報告・質問してみてください。`"
                    },
                ]
            }
        })
    }
    if (message.content === 'w/ch-1') {
        message.channel.send({
            embed: {
                title: "予期せぬ出来事の発生 : Resourcesを読み込み失敗しました。",
                descrption: "Botは`w/ch-2`を処理しようとしましたがコマンドの処理に失敗しました。",
                color: 0xff0000,
                timestamp: new Date(),
                footer: {
                    test: "ErrorCode:`0x2020`"
                },
                fields: [
                    {
                        name: "**Reason:** __ソースファイル`103~`のResourcesエリアのコードを確認してください。__",
                        value: "開発元に連絡してください。"
                    }
                ]
            }
        })
    }
})