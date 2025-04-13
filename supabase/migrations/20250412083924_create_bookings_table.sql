CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  vehicle TEXT NOT NULL,
  price NUMERIC NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT NOT NULL CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can create bookings" 
ON bookings
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Users can view their own bookings" 
ON bookings
FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Admin users can manage bookings"
ON bookings
FOR ALL
TO service_role
USING (true);