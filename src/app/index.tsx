import { StyleSheet, Text, View } from 'react-native';
import { Colors, Typography, Spacing } from '../constants/theme';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>PROTOTYPE</Text>
      <Text style={styles.title}>run.io</Text>
      <Text style={styles.tagline}>Move. Capture. Compete.</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>System Architecture Initialized</Text>
        <Text style={styles.cardBody}>
          Ready for screen implementation: Map, Active Run HUD, Territory Conquest, and Multi-player Parties.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  badge: {
    color: Colors.primary,
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.bold,
    letterSpacing: 2,
    marginBottom: Spacing.sm,
    backgroundColor: Colors.surfaceElevated,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: Typography.sizes.title,
    fontWeight: Typography.weights.bold,
    letterSpacing: -1,
  },
  tagline: {
    color: Colors.primary,
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
    marginTop: Spacing.xs,
    marginBottom: Spacing.xxl,
  },
  card: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 14,
    padding: Spacing.lg,
    width: '100%',
    maxWidth: 360,
  },
  cardTitle: {
    color: Colors.textPrimary,
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.semibold,
    marginBottom: Spacing.xs,
  },
  cardBody: {
    color: Colors.textSecondary,
    fontSize: Typography.sizes.sm,
    lineHeight: 20,
  },
});
