<template>
  <div>
    <v-expansion-panels flat>
      <v-expansion-panel style="background-color:#f7f7f7;">
        <v-expansion-panel-header>
          <div class="text-center">お知らせ情報＠2022-04-01</div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card flat>
            <v-card-text>
              <h4>04-01 あめ</h4>
              みちくさびゅあー感謝祭が4/1~4/9の期間で開催されます。<br />
              好きな話数をTwitterにシェアしてばっくやーど漫画を布教してもらえると助かります。<br />
              旦那様を増やしたいのです。<br />
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>03-13 はれ</h4>
              春が近づいています。<br />
              メニューにお問合せフォームを追加しました。<br />
              バグや要望などがありましたら使ってください。<br />
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>01-22 はれ</h4>
              コインハイブ事件の最高裁判決が出ましたのでブログ書きました。<br />
              <a href="https://ci-en.net/creator/10765/article/587410">https://ci-en.net/creator/10765/article/587410</a><br />
              プログラマや開発者は犯罪行為に抵触しないように、コードだけでなく法や判例も読んでいるという話です。<br />
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>12-02 はれ</h4>
              もう冬です。とても寒い。<br />
              びゅあーの漫画の横幅を最大1280pxにしました。<br />
              これで横長の4Kのディスプレイでも縦方向の読みやすさが向上するはずです。たぶん。<br />
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>11-19 はれ</h4>
              秋です。寒い。<br />
              びゅあー検索くんでキャラ検索がしやすくなりました。<br />
              キャラアイコンをクリック（タップ）すると検索ワードに追加されて便利でございます。<br />
              それにしても寒いです<br />
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>11-07 なぞ</h4>
              秋です。寒くなってきた。<br>
              試験的に道草恋歌が閲覧できる機能を実装しました。<br>
              左のメニューからどうぞ。気が向いたら検索機能とかシェア機能とか実装します。<br>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>10月24日 あめ</h4>
              すっかり秋です。お芋が美味しい季節。<br>
              びゅあーはタイムラインページを試験的に追加しました。<br>
              今後、地味なアップデートを予定しています。<br>
              あと、諸々を統合したポータルアプリ的なやつの試作をはじめました。スマホアプリにもなる感じです（たぶん）<br>
              旧びゅあーはしばらくこっちに強制的に飛ばします。<br>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>8月13日 なぞ</h4>
              フッターに今週のおすすめ作品の掲載をはじめました。<br>
              飽きるまではオススメ作品のピックアップでもしようと思います。<br>
              他にも色々と改善したりしました。webpがイチオシの改善ポイントです。<br>
              <ol>
                <li>
                  数こまの画像をjpgからwebpに変更しました。画像の読み込みが大幅に改善されると思います。
                </li>
                <li>
                  マイページのデザインを修正しました。スマホでも見やすくなったと思います。
                </li>
                <li>
                  アップデートの際に削除された古いjsが、ブラウザ側がキャッシュしていたindex.htmlによって呼ばれることで画面が真っ白のままになるトラブルを検知しました。<br>
                  対策は検討評価中ですが、とりあえずindex.htmlのキャッシュを除外しました。これで完全に治るのかは経過観察になります。<br>
                  もし、発生した場合はキャッシュをクリアするかページを閉じることで事象が改善されます。<br>
                </li>
              </ol>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>8月09日 晴れ</h4>
              作品情報一覧ページにブックマーク機能を追加しました。<br>
              →<a href="#/products">道草屋の作品一覧</a><br>
              ログインボタンからTwitter認証するとLink欄のBOOTH,DLSITEそれぞれの横に☆のチェックボックスが表示されます。<br>
              どこで買ったかメモするのに役立つかも。好きに使ってください。<br>
              需要があれば購入作品一覧のマイページも作ろうかなとか思いました（思っただけ）<br>
              08/10追記→マイページ作りました。
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>7月18日 晴れ</h4>
              関東は梅雨が明けました。<br>
              道草屋では新しい予約電話が公開されましたね。<br>
              びゅあーは色々と機能を追加しました。<br>
              <ol>
                <li>
                  左メニューにキャラクター紹介ページが追加されました。
                </li>
                <li>
                  左メニューに道草屋の作品一覧ページを追加しました。登場声優さん等で検索できるちょっと便利なやつです。
                </li>
                <li>
                  左メニューにNikaスタンプのリンクを追加しました。
                </li>
                <li>
                  アプリの更新があるときに更新ボタンが表示されるようになりました。
                </li>
              </ol>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>6月7日 曇り</h4>
              各話にひとくちMEMOを実装しました。
              MEMOがある場合にのみ、オレンジ色のMEMOボタンが表示されます。
              あと、びゅあー検索くん㌁がひっそりとリリースされました。
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>4月7日 曇り</h4>
              左上のサイドメニューに道草恋歌へのリンクを追加しました。
              道草恋歌は道草屋への想いを俳句や短歌で綴るためのアプリです。
              七草への想いが歌になって、見知らぬ他の旦那様の心を揺らし、もっと道草屋が好きになれたら…。
              そんな想いで作ったアプリです。よければご愛顧ください。
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <h4>3月10日 晴れ時々曇り</h4>
              試験的にいくつかの機能を解放しました。
              <ol>
                <li>お知らせ情報（これ）の追加</li>
                <li>
                  左上のサイドメニューに予約電話へのリンクを追加（いつか自動更新にする予定）
                </li>
                <li>
                  PWAアプリとしてインストールした際の名前をmo-vueからみちくさびゅあー（びゅあー）に変更
                </li>
              </ol>
              アプリ名の更新は勝手にされるのか分かりません。再インストールしたら更新されたのは確認済みです。
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels flat>
      <v-expansion-panel style="background-color:#fffecd;">
        <v-expansion-panel-header>
          <div class="text-center">ブックマーク（しおり）</div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class=".content-center" style="text-align:center">
          <v-btn class="BookmarkButton" small v-for="v in db.bookmark" :key="v" color="amber" :to="'/?page=' + v">第{{ v }}話</v-btn>
          <!-- 一括削除ぼたんとか欲しい -->
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { LocalStorageStore } from "../stores/localStorage";
export default {
  data: () => ({
    db: LocalStorageStore.getInstance().db
  }),
};
</script>

<style scoped>
.BookmarkButton {
  margin: 5px 5px;
  color: white;
  
}
.content-center {
  display: flex;
  justify-content: center;
}

.expansion{
  background-color:#fffecd;
}
</style>
