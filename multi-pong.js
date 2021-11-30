import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

@SuppressWarnings("serial")
public class Pingpong extends JPanel {
    Ball ball = new Ball(this);
    Racquet racquet = new Racquet(this);
    int speed = 1;

    private int getScore() {
        return speed - 1;
    }

    public Pingpong() {
        addKeyListener(new KeyListener() {
            @Override
            public void keyTyped(KeyEvent e) {
            }

            @Override
            public void keyReleased(KeyEvent e) {
                racquet.keyReleased(e);
            }

            @Override
            public void keyPressed(KeyEvent e) {
                racquet.keyPressed(e);
            }
        });
        setFocusable(true);
    }

    private void move() {
        ball.move();
        racquet.move();
    }

 @Override 

    public void paint(Graphics g) { 

        super.paint(g); 

        Graphics2D g2d = (Graphics2D) g; 

        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, 

                RenderingHints.VALUE_ANTIALIAS_ON); 

        ball.paint(g2d); 

        racquet.paint(g2d); 

        g2d.setColor(Color.GRAY); 

        g2d.setFont(new Font("Verdana", Font.BOLD, 30)); 

        g2d.drawString(String.valueOf(getScore()), 10, 30); 

    } 

  

    public void gameOver() { 

        JOptionPane.showMessageDialog(this, "Su puntaje fue: " + getScore(), 

                "Game Over", JOptionPane.YES_NO_OPTION); 

        System.exit(ABORT); 

    } 

  

    public static void main(String[] args) throws InterruptedException { 

        JFrame frame = new JFrame("Ping Pong"); 

        Pingpong juego = new Pingpong(); 

        frame.add(juego); 

        frame.setSize(400, 400); 

        frame.setVisible(true); 

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); 

  

        while (true) { 

            juego.move(); 

            juego.repaint(); 

            Thread.sleep(10); 

        } 

    } 

} 

    
