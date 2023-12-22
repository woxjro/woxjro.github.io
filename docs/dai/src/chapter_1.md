# DAI：暗号資産担保型ステーブルコイン

## [主要な外部アクター](https://makerdao.com/en/whitepaper#key-external-actors)

Maker プロトコルは、その基盤であるスマートコントラクト群に加えて、
運用を維持するために`Keeper`、`Oracle`、`Global Settler`やMakerコミュニティーメンバーといった外部アクター群を要する。

<!-- Keepers take advantage of the economic incentives presented by the Protocol; -->
`Keeper`はMaker プロトコルが作り出す経済的インセンティブを利用する外部アクターであり、
<!-- Oracles and Global Settlers are external actors with special permissions in the system assigned to them by MKR voters; -->
`Oracle`と`Global Settler`は、MKRの有権者によって割り当てられた、システム内に対して特別な権限を持つ外部アクターである。
<!-- and Maker community members are individuals and organizations that provide services. -->
また、Makerコミュニティメンバーは、サービスを提供する個人や組織である。（？）


### `Keeper`
<!--
A Keeper is an independent (usually automated) actor that is incentivized by arbitrage opportunities to provide liquidity in various aspects of a decentralized system.
In the Maker Protocol, Keepers are market participants that help Dai maintain its Target Price ($1):
they sell Dai when the market price is above the Target Price, and buy Dai when the market price is below the Target Price.
Keepers participate in Surplus Auctions, Debt Auctions, and Collateral Auctions when Maker Vaults are liquidated.
-->
`Keeper`らは（通常は自動で動く）独立したアクターであり、裁定取引の機会の基づいてインセンティブを受けて、分散システムの様々な局面において流動性をもたらす。
Makerプロトコルにおいて、`Keeper`はDaiの目標価格（$1）を維持するための市場参加者である。
つまり、`Keeper`らはDaiの市場価格が目標価格より上の際はDaiを売り、市場価格が目標価格より下の際はDaiを買う。
また、`Keeper`らはMaker金庫が清算される際、余剰オークション、負債オークションおよび担保オークションに参加する。
- 余剰オークション
- 負債オークション
- 担保オークション

### `Price Oracle`
<!--
The Maker Protocol requires real-time information about the market price of the collateral assets in Maker Vaults in order to know when to trigger Liquidations.

The Protocol derives its internal collateral prices from a decentralized Oracle infrastructure that consists of a broad set of individual nodes called Oracle Feeds.
MKR voters choose a set of trusted Feeds to deliver price information to the system through Ethereum transactions.
They also control how many Feeds are in the set.

To protect the system from an attacker attempting to gain control of a majority of the Oracles, the Maker Protocol receives price inputs through the Oracle Security Module (OSM), not from the Oracles directly.
The OSM, which is a layer of defense between the Oracles and the Protocol, delays a price for one hour, allowing Emergency Oracles or a Maker Governance vote to freeze an Oracle if it is compromised.
Decisions regarding Emergency Oracles and the price delay duration are made by MKR holders.
-->
Makerプロトコルは、いつ清算が発生するかを知るために、Maker金庫内の担保資産のリアルタイムな市場価格が必要である。

### `Emergency Oracle`
<!--
Emergency Oracles are selected by MKR voters and act as a last line of defense against an attack on the governance process or on other Oracles.
Emergency Oracles are able to freeze individual Oracles (e.g., ETH and BAT Oracles) to mitigate the risk of a large number of users trying to withdraw their assets from the Maker Protocol in a short period of time, as they have the authority to unilaterally trigger an Emergency Shutdown.
-->
### DAO チーム
<!--
DAO teams consist of individuals and service providers, who may be contracted through Maker Governance to provide specific services to MakerDAO.
Members of DAO teams are independent market actors and are not employed by the Maker Foundation.

The flexibility of Maker Governance allows the Maker community to adapt the DAO team framework to suit the services needed by the ecosystem based on real-world performance and emerging challenges.

Examples of DAO team member roles are the Governance Facilitator, who supports the communication infrastructure and processes of governance, and Risk Team members, who support Maker Governance with financial risk research and draft proposals for onboarding new collateral and regulating existing collateral.

While the Maker Foundation has bootstrapped Maker Governance to date, it is anticipated that the DAO will take full control, conduct MKR votes, and fill these varied DAO team roles in the near future.

-->

### Dai Savings Rate（DSR）
<!--
The Dai Savings Rate (DSR) allows any Dai holder to earn savings automatically and natively by locking their Dai into the DSR contract in the Maker Protocol. It can be accessed via the Oasis Save portal or through various gateways into the Maker Protocol. Users aren’t required to deposit a minimum amount to earn the DSR, and they can withdraw any or all of their Dai from the DSR contract at any time.

The DSR is a global system parameter that determines the amount Dai holders earn on their savings over time. When the market price of Dai deviates from the Target Price due to changing market dynamics, MKR holders can mitigate the price instability by voting to modify the DSR accordingly:

If the market price of Dai is above 1 USD, MKR holders can choose to gradually decrease the DSR, which will reduce demand and should reduce the market price of Dai toward the 1 USD Target Price.
If the market price of Dai is below 1 USD, MKR holders can choose to gradually increase the DSR, which will stimulate demand and should increase the market price of Dai toward the 1 USD Target Price.
Initially, adjustment of the DSR will depend on a weekly process, whereby MKR holders first evaluate and discuss public market data and proprietary data provided by market participants, and then vote on whether an adjustment is necessary or not. The long-term plan includes implementation of the DSR Adjustment Module, an Instant Access Module that directly controls both the DSR and the Base Rate. This module allows for easy adjustment of the DSR (within strict size and frequency boundaries set by MKR holders) by an MKR holder on behalf of the larger group of MKR holders. The motivation behind this plan is to enable nimble responses to rapidly changing market conditions, and to avoid overuse of the standard governance process of Executive Voting and Governance Polling.
-->

## Maker プロトコルのガバナンス
