
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gjsnittpdzpenliwijuz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqc25pdHRwZHpwZW5saXdpanV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzI3OTcsImV4cCI6MjA2MjA0ODc5N30.NmkygfNTU1mvtGhyE3DGIuUpawXBNLly7P5mUl7J_oM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
