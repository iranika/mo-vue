<template>
  <div>
    <v-expansion-panels flat>
      <v-expansion-panel style="background-color:#f7f7f7;">
        <v-expansion-panel-header>
          <div class="text-center">お知らせ情報＠2021-03-10</div>
          
        </v-expansion-panel-header>
        <v-expansion-panel-content>
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