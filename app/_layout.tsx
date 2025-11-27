import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Render the tabs group (the actual layout is in app/(tabs)/_layout.tsx) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
