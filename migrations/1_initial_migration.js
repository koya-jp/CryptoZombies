/** @format */

/**
 * Migrations.sol → 変更の履歴を保存している
 *  → ２回目のデプロイをしなくて良いようにする。
 * デプロイ→ 1,2,3 の順で実行される。
 * マイグレーションをして、コントラクトの状態をどのように変更するかを
 * Truffleに伝える。  → コントラクトごとにMigration ファイルを分ける。
 *
 * メインネット → truffle migrate --network mainnet
 */
const Migrations = artifacts.require('Migrations');

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};
