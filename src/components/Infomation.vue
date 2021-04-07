<template>
  <div>
    <v-expansion-panels flat>
      <v-expansion-panel style="background-color:#f7f7f7;">
        <v-expansion-panel-header>
          <div class="text-center">お知らせ情報＠2021-04-07</div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
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
                <li>左上のサイドメニューに予約電話へのリンクを追加（いつか自動更新にする予定）</li>
                <li>PWAアプリとしてインストールした際の名前をmo-vueからみちくさびゅあー（びゅあー）に変更</li>
              </ol>
              アプリ名の更新は勝手にされるのか分かりません。再インストールしたら更新されたのは確認済みです。
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>