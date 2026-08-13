import { StyleSheet, Text, View } from "react-native";

const transactions = [
  {
    id: 1,
    title: "Salary",
    amount: 35000,
  },
  {
    id: 2,
    title: "Food",
    amount: -500,
  },
  {
    id: 3,
    title: "Transport",
    amount: -200,
  },
  {
    id: 4,
    title: "Coffee",
    amount: -150,
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good evening!</Text>
      <Text style={styles.name}>Kidus</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.label}>Total Balance</Text>
        <Text style={styles.balance}>24,450ETB </Text>
      </View>

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
      <Text style={styles.sectionTitle}>Recent Transactions</Text>

      <View style={styles.transactions}>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transaction}>
            <Text style={styles.transactionTitle}>{transaction.title}</Text>

            <Text style={styles.transactionAmount}>
              {transaction.amount} ETB
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    backgroundColor: "#F8F9FB",
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
    width: "100%",
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

  label: {
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  summaryLabel: {
    fontSize: 13,
    color: "#737373",
    fontWeight: "500",
    marginBottom: 8,
  },

  income: {
    fontSize: 19,
    fontWeight: "700",
    color: "#16A34A",
  },

  expense: {
    fontSize: 19,
    fontWeight: "700",
    color: "#DC2626",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111111",
    marginTop: 32,
    marginBottom: 2,
  },

  transactions: {
    marginTop: 12,
    gap: 10,
  },

  transaction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  transactionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222222",
  },

  transactionAmount: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222222",
  },
});
