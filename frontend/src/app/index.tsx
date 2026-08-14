import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const transactions = [
  {
    id: 1,
    title: "Salary",
    amount: 35000,
    type: "income",
  },
  {
    id: 2,
    title: "Food",
    amount: -500,
    type: "expense",
  },
  {
    id: 3,
    title: "Transport",
    amount: -200,
    type: "expense",
  },
  {
    id: 4,
    title: "Coffee",
    amount: -150,
    type: "expense",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View>
          <Text style={styles.greeting}>Good evening 👋</Text>
          <Text style={styles.name}>Kidus</Text>
        </View>

        {/* Balance */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>

          <Text style={styles.balance}>24,450 ETB</Text>

          <Text style={styles.balanceSubtitle}>
            Available balance this month
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Income</Text>
            <Text style={styles.income}>35,000 ETB</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Expenses</Text>
            <Text style={styles.expense}>9,550 ETB</Text>
          </View>
        </View>

        {/* Transactions header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>

          <Pressable>
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </View>

        {/* Transactions */}
        <View style={styles.transactions}>
          {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transaction}>
              <View style={styles.transactionLeft}>
                <View
                  style={[
                    styles.transactionIcon,
                    transaction.type === "income"
                      ? styles.incomeIcon
                      : styles.expenseIcon,
                  ]}
                >
                  <Text style={styles.iconText}>
                    {transaction.type === "income" ? "+" : "-"}
                  </Text>
                </View>

                <View>
                  <Text style={styles.transactionTitle}>
                    {transaction.title}
                  </Text>

                  <Text style={styles.transactionType}>
                    {transaction.type === "income" ? "Income" : "Expense"}
                  </Text>
                </View>
              </View>

              <Text
                style={[
                  styles.transactionAmount,
                  transaction.type === "income"
                    ? styles.incomeAmount
                    : styles.expenseAmount,
                ]}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toLocaleString()} ETB
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Add transaction button */}
      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 120,
  },

  greeting: {
    fontSize: 16,
    color: "#737373",
    fontWeight: "500",
  },

  name: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111111",
    marginTop: 4,
    letterSpacing: -0.5,
  },

  balanceCard: {
    marginTop: 32,
    padding: 24,
    borderRadius: 24,
    backgroundColor: "#111111",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },

  balanceLabel: {
    fontSize: 14,
    color: "#A3A3A3",
    fontWeight: "500",
  },

  balance: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFFFFF",
    marginTop: 10,
    letterSpacing: -1,
  },

  balanceSubtitle: {
    fontSize: 13,
    color: "#737373",
    marginTop: 8,
  },

  summaryRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },

  summaryCard: {
    flex: 1,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EDEDED",
  },

  summaryLabel: {
    fontSize: 13,
    color: "#737373",
    fontWeight: "500",
    marginBottom: 8,
  },

  income: {
    fontSize: 18,
    fontWeight: "700",
    color: "#16A34A",
  },

  expense: {
    fontSize: 18,
    fontWeight: "700",
    color: "#DC2626",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111111",
  },

  seeAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#737373",
  },

  transactions: {
    marginTop: 12,
    gap: 10,
  },

  transaction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  transactionIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  incomeIcon: {
    backgroundColor: "#DCFCE7",
  },

  expenseIcon: {
    backgroundColor: "#FEE2E2",
  },

  iconText: {
    fontSize: 20,
    fontWeight: "700",
  },

  transactionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },

  transactionType: {
    fontSize: 12,
    color: "#737373",
    marginTop: 3,
  },

  transactionAmount: {
    fontSize: 14,
    fontWeight: "700",
  },

  incomeAmount: {
    color: "#16A34A",
  },

  expenseAmount: {
    color: "#DC2626",
  },

  addButton: {
    position: "absolute",
    right: 24,
    bottom: 32,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "400",
    lineHeight: 34,
  },
});
